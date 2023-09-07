import { Options } from './options.type';

export const generateCustomProp = ({
  innerElements = {},
  props = {},
}: Options) => {
  const innerElementsStyles: Record<string, object> = Object.entries(
    innerElements,
  ).reduce((acc0, [key0, values]) => {
    const variants = values.reduce((acc1, key1) => {
      const level0 = typeof key1 === 'string' ? key1 : key1[0];
      const level1 = typeof key1 === 'string' ? undefined : key1[1];

      const optionsLevel0 = props[level0];

      if (!optionsLevel0) {
        throw new Error(`Cannot' find ${level0} in option.props`);
      }

      const opt = optionsLevel0.reduce((acc2, el2) => {
        let variantsLevel1 = {};
        if (level1) {
          const optionsLevel1 = props[level1];

          if (!optionsLevel1) {
            throw new Error(`Cannot' find ${optionsLevel1} in option.props`);
          }

          variantsLevel1 = optionsLevel1.reduce(
            (acc3, el3) => ({
              ...acc3,
              [el3]: { borderRightColor: 'purple' },
            }),
            {},
          );
        }

        const variantsLevel1Object = level1 ? { [level1]: variantsLevel1 } : {};

        return {
          ...acc2,
          [el2]: { borderBottomColor: 'yellow', ...variantsLevel1Object },
        };
      }, {});

      return {
        ...acc1,
        [level0]: {
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
  }, {});

  const { _: containerCustom, ...restInnerElements } = innerElementsStyles;

  const prop = {
    borderTopColor: 'red',
    ...containerCustom,
    innerElements: restInnerElements,
  };

  return prop;
};
