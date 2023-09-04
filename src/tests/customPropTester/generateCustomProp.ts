import { Options } from './options.type';

export const generateCustomProp = ({
  innerElements = {},
  props = {},
}: Options) => {
  const innerElementsStyles = Object.entries(innerElements).reduce(
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
    innerElements: innerElementsStyles,
  };

  return prop;
};
