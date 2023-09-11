import { Options } from './options.type';

type Variant = {
  name: string;
  expectedStyle: string;
  variantProps: object;
};

type Variants = {
  componentName: string;
  testId: string;
  variants: Variant[];
};

export const generateVariants = ({
  containerId,
  innerElements = {},
  props = {},
}: Options): Variants[] =>
  Object.entries(innerElements).map(
    ([innerComponentName, innerComponentVariants]) => {
      const componentName =
        innerComponentName === '_' ? 'container' : innerComponentName;
      const testId = `${containerId}${
        innerComponentName === '_' ? '' : `-${innerComponentName}`
      }`;

      const variants = innerComponentVariants.map((propsName) => {
        if (typeof propsName === 'string') {
          const singleVariants = props[propsName].map((propsValue) => ({
            name: `[${propsName} = ${propsValue}]`,
            expectedStyle: 'z-index: 1',
            variantProps: {
              [propsName]: propsValue,
            },
          }));

          return singleVariants;
        }

        const propsName0 = propsName[0];
        const propsName1 = propsName[1];

        const singleVariants0 = props[propsName0].map((propsValue0) => ({
          name: `level0 - [${propsName0} = ${propsValue0}]`,
          expectedStyle: 'z-index: 1',
          variantProps: {
            [propsName0]: propsValue0,
          },
        }));

        const doubleVariants = props[propsName0].map((propsValue0) =>
          props[propsName1].map((propsValue1) => ({
            name: `level1 - [${propsName0} = ${propsValue0}][${propsName1} = ${propsValue1}]`,
            expectedStyle: 'border-right-color: rgb(128, 0, 128)',
            variantProps: {
              [propsName0]: propsValue0,
              [propsName1]: propsValue1,
            },
          })),
        );
        return [singleVariants0, doubleVariants];
      });

      return {
        componentName,
        testId,
        variants: variants.flat(4),
      };
    },
  );
