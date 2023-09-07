import { vi } from 'vitest';

import { applyProps } from './applyProps';
import { generateCustomProp } from './generateCustomProp';
import { Options } from './options.type';
import { render } from '../render';

/**
 * customPropTester should allow you to test "custom" prop with less effort and force consistency between components. Might not be perfect for now!
 * @example InlineMessage.test.tsx
 */
export const customPropTester = (
  Component: React.ReactNode,
  options: Options,
) => {
  const customProp = generateCustomProp(options);

  const { innerElements = {}, props = {} } = options;

  describe('CustomPropTester', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it(`Top Level style`, () => {
      const { queryByTestId } = render(
        applyProps(Component, { custom: customProp }),
      );

      const topLevelElement = queryByTestId(options.containerId);

      if (topLevelElement === null) {
        throw new Error('containerId not found!');
      }

      expect(topLevelElement).toHaveStyle('border-top-color: rgb(255, 0, 0)');
    });

    it('should be possible to set data-testid', () => {
      const dataTestId = 'custom-data-test-id';
      const { getByTestId } = render(
        applyProps(Component, { 'data-testid': dataTestId }),
      );

      const container = getByTestId(dataTestId);

      expect(container).toBeInTheDocument();
    });

    Object.entries(innerElements).forEach(
      ([innerComponentName, innerComponentVariants]) => {
        const componentName =
          innerComponentName === '_' ? 'container' : innerComponentName;
        const testId = `${options.containerId}${
          innerComponentName === '_' ? '' : `-${innerComponentName}`
        }`;

        describe(`InnerComponent - ${componentName}`, () => {
          it(`Top Level style`, () => {
            const { queryByTestId } = render(
              applyProps(Component, { custom: customProp }),
            );

            const element = queryByTestId(testId);

            expect(element).toHaveStyle('border-left-color: rgb(0, 0, 0)');
          });

          innerComponentVariants.forEach((propsName) => {
            if (typeof propsName === 'string') {
              props[propsName].forEach((propsValue) => {
                it(`Variant [${propsName} = ${propsValue}]`, () => {
                  const { queryByTestId } = render(
                    applyProps(Component, {
                      custom: customProp,
                      [propsName]: propsValue,
                    }),
                  );
                  const element = queryByTestId(testId);

                  expect(element).toHaveStyle(
                    'border-left-color: rgb(0, 0, 0)',
                  );
                });
              });
            } else {
              const propsName0 = propsName[0];
              const propsName1 = propsName[1];

              props[propsName0].forEach((propsValue0) => {
                props[propsName1].forEach((propsValue1) => {
                  it(`Variant [${propsName0} = ${propsValue0}][${propsName1} = ${propsValue1}]`, () => {
                    const { queryByTestId } = render(
                      applyProps(Component, {
                        custom: customProp,
                        [propsName0]: propsValue0,
                        [propsName1]: propsValue1,
                      }),
                    );
                    const element = queryByTestId(testId);

                    expect(element).toHaveStyle(
                      'border-right-color: rgb(19, 19, 19)',
                    );
                  });
                });
              });
            }
          });
        });
      },
    );
  });
};
