import { vi } from 'vitest';

import { applyProps } from './applyProps';
import { generateCustomProp } from './generateCustomProp';
import { generateVariants } from './generateVariants';
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
  const customMapper = options.customMapper
    ? options.customMapper
    : (a: object) => a;
  const customProp = customMapper(generateCustomProp(options));
  const componentVariants = generateVariants(options);

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

    componentVariants.forEach(({ componentName, testId, variants }) => {
      describe(`InnerComponent - ${componentName}`, () => {
        it(`Top Level style`, () => {
          const { queryByTestId } = render(
            applyProps(Component, { custom: customProp }),
          );

          const element = queryByTestId(testId);

          expect(element).toHaveStyle('z-index: 1');
        });

        variants.forEach(({ name, expectedStyle, variantProps }) => {
          it(`Variant ${name}`, () => {
            const { queryByTestId } = render(
              applyProps(Component, {
                custom: customProp,
                ...variantProps,
              }),
            );
            const element = queryByTestId(testId);

            expect(element).toHaveStyle(expectedStyle);
          });
        });
      });
    });
  });
};
