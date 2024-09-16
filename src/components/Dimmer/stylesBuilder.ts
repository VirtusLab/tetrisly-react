import { DimmerProps } from './Dimmer.props';
import { defaultConfig } from './Dimmer.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type StylesBuilderParams = {
  custom: DimmerProps['custom'];
};

type DimmerStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = ({
  custom,
}: StylesBuilderParams): DimmerStylesBuilder => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });

  const { ...restStyles } = config;

  return {
    container: {
      ...restStyles,
    },
  };
};
