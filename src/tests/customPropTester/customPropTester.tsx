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

    Object.entries(innerElements).forEach(
      ([innerComponentName, innerComponentVariants]) => {
        describe(`InnerComponent - ${innerComponentName}`, () => {
          it(`Top Level style`, () => {
            const { queryByTestId } = render(
              applyProps(Component, { custom: customProp }),
            );

            const testId = `${options.containerId}-${innerComponentName}`;
            const element = queryByTestId(testId);

            expect(element).toHaveStyle('border-left-color: rgb(0, 0, 0)');
          });

          innerComponentVariants.forEach((propsName) => {
            props[propsName].forEach((propsValue) => {
              it(`Variant [${propsName} = ${propsValue}]`, () => {
                const { queryByTestId } = render(
                  applyProps(Component, {
                    custom: customProp,
                    [propsName]: propsValue,
                  }),
                );

                const testId = `${options.containerId}-${innerComponentName}`;
                const element = queryByTestId(testId);

                expect(element).toHaveStyle('border-left-color: rgb(0, 0, 0)');
              });
            });
          });
        });
      },
    );
  });
};
