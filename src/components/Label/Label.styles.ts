import { SystemProps } from '@xstyled/styled-components';

import { Theme } from '@/theme';

type Config = SystemProps<Theme> & TooltipConfig & OptionalConfig;

type TooltipConfig = {
  tooltip: SystemProps<Theme>;
};

type OptionalConfig = {
  optional: SystemProps<Theme>;
};

export const config = {
  text: 'medium-175',
  color: 'content-primary',
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'component-gap-medium',
  tooltip: {
    color: 'content-secondary',
  },
  optional: {
    color: 'content-tertiary',
  },
} as const satisfies Config;
