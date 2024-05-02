import { ControlConfig, defaultConfig } from './Control.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type ControlStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = (custom?: ControlConfig): ControlStylesBuilder => {
  const container = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return { container };
};
