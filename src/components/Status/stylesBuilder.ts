import { defaultConfig, StatusConfig } from './Status.styles';
import type { StatusAppearance } from './StatusAppearance.type';
import type { StatusEmphasis } from './StatusEmphasis.type';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types';

type StylesBuilderParams = {
  container: BaseProps;
  dot: BaseProps;
};

export const stylesBuilder = (
  appearance?: StatusAppearance,
  custom?: StatusConfig,
  emphasis?: StatusEmphasis,
): StylesBuilderParams => {
  const {
    innerElements,
    appearance: containerAppearance,
    dot,
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  const { appearance: dotAppearanceStyle, ...dotAppearance } = dot;

  const containerStyles =
    appearance &&
    emphasis &&
    containerAppearance[appearance].emphasis[emphasis];
  const dotStyles =
    appearance && emphasis && dot.appearance[appearance].emphasis[emphasis];

  return {
    container: {
      ...container,
      ...containerStyles,
    },
    dot: {
      ...dotAppearance,
      ...dotStyles,
    },
  };
};
