import { cloneElement, isValidElement } from 'react';

import { render } from './render';

/*
    Example of usage:
    customPropTester(<InlineMessage title="Title" description="Description" />, {
        containerId: "inline-message",
        props: {
            intent: ['informative', 'success', 'warning', 'negative']
        },
        innerComponents: {
            title: ['intent'],
            iconContainer: ['intent'],
            description: []
        }
    })
*/

type Options = {
  containerId: string;
  props?: Record<string, string[]>;
  innerComponents?: Record<string, string[]>;
};

const generateCustomProp = ({ innerComponents = {}, props = {} }: Options) => {
  const innerComponentsStyles = Object.entries(innerComponents).reduce(
    (acc0, [key0, values]) => {
      const variants = values.reduce((acc1, key1) => {
        const options = props[key1];

        if (!options) {
          throw new Error(`Cannot' find ${key1} in option.props`);
        }

        const opt = options.reduce(
          (acc2, el2) => ({ ...acc2, [el2]: { borderBottomColor: 'yellow' } }),
          {},
        );

        return {
          ...acc1,
          [key1]: {
            ...opt,
          },
        };
      }, {});

      return {
        ...acc0,
        [key0]: {
          borderLeftColor: 'black',
          ...variants,
        },
      };
    },
    {},
  );

  const prop = {
    borderTopColor: 'red',
    // innerComponents: innerComponentsStyles
    ...innerComponentsStyles,
  };

  return prop;
};

const applyProps = (Component: React.ReactNode, props: object) => {
  if (isValidElement(Component)) {
    return cloneElement(Component, props);
  }
  throw new Error('Provided Component is not valid');
};

export const customPropTester = (
  Component: React.ReactNode,
  options: Options,
) => {
  const customProp = generateCustomProp(options);
  const { innerComponents = {}, props = {} } = options;

  describe('Custom Prop tests', () => {
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

    Object.entries(innerComponents).forEach(
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
