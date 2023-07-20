import { SystemProps } from '@xstyled/styled-components';

import { HelperTextIntent } from './HelperTextIntent.type';

import { Theme } from '@/theme';

type Config = {
  intent: Record<HelperTextIntent, SystemProps>;
};

export const config = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'component-gap-large',
  text: 'medium-150',
  intent: {
    none: {
      color: 'content-secondary',
    },
    alert: {
      color: 'content-negative-secondary',
    },
    success: {
      color: 'content-positive-secondary',
    },
  },
} as const satisfies SystemProps<Theme> & Config;
