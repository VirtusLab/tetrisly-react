import type { StatusDotProps } from '../StatusDot.props';
import { defaultConfig } from '../StatusDot.styles';
import { StatusDotAppearance } from '../types';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type StylesBuilderParams = {
  appearance: StatusDotAppearance;
  hasStroke: StatusDotProps['hasStroke'];
  custom: StatusDotProps['custom'];
};

type StatusDotStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = ({
  appearance,
  hasStroke,
  custom,
}: StylesBuilderParams): StatusDotStylesBuilder => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });

  const {
    appearance: appearanceStyles,
    hasStroke: strokedStyles,
    ...restStyles
  } = config;

  return {
    container: {
      ...restStyles,
      ...appearanceStyles[appearance],
      ...(hasStroke && strokedStyles),
    },
  };
};
