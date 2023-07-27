import { IconProps } from '@virtuslab/tetrisly-icons/dist/tetrisly-icons.es';
import { SystemProps } from '@xstyled/styled-components';

import { HelperTextIntent } from './HelperTextIntent.type';

import { Theme } from '@/theme';

type Config = {
  intent: Record<HelperTextIntent, SystemProps>;
  icon: Record<HelperTextIntent, SystemProps & IconProps>;
  iconContainer: SystemProps;
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
  icon: {
    none: {
      name: '16-info',
    },
    alert: {
      name: '16-alert-full',
    },
    success: {
      name: '16-check',
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '2xSmall',
  },
} as const satisfies SystemProps<Theme> & Config;
