import { SystemProps } from '@xstyled/styled-components';

import { Theme } from '@/theme';
import { BaseProps } from '@/types/BaseProps';

export type LabelConfig = BaseProps & TooltipConfig & OptionalConfig;

type TooltipConfig = {
  tooltip?: SystemProps<Theme>;
};

type OptionalConfig = {
  optional?: SystemProps<Theme>;
};

export const defaultConfig = {
  text: 'medium-175',
  color: 'content-primary',
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'component-gap-xSmall',
  tooltip: {
    color: 'content-secondary',
    display: 'flex',
    alignItems: 'center',
    minHeight: 'xSmall',
  },
  optional: {
    color: 'content-tertiary',
  },
} satisfies LabelConfig;
