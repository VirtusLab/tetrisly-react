import type { LabelProps } from './Label.props';
import { defaultConfig } from './Label.styles';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type LabelStylesBuilder = {
  label: BaseProps;
  optional: BaseProps;
  tooltip: BaseProps;
  action: BaseProps<'appearance'>;
};

export const stylesBuilder = (
  custom: LabelProps['custom'],
): LabelStylesBuilder => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });
  const {
    innerElements: { optional, tooltip, action },
    ...label
  } = config;

  return {
    label,
    optional,
    tooltip,
    action,
  };
};
