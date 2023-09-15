import type { StatusDotProps } from '../StatusDot.props';
import { defaultConfig } from '../StatusDot.styles';
import { StatusDotAppearance } from '../types';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type StylesBuilderParams = {
  appearance: StatusDotAppearance;
  stroked: StatusDotProps['stroked'];
  custom: StatusDotProps['custom'];
};

type StatusDotStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = ({
  appearance,
  stroked,
  custom,
}: StylesBuilderParams): StatusDotStylesBuilder => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });

  const {
    appearance: appearanceStyles,
    stroked: strokedStyles,
    ...restStyles
  } = config;

  return {
    container: {
      ...restStyles,
      ...appearanceStyles[appearance],
      ...(stroked && strokedStyles),
    },
  };
};
