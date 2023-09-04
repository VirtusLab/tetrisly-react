import { HelperTextIntent } from './HelperTextIntent.type';

import { BaseProps } from '@/types/BaseProps';
import { IconName } from '@/utility-types/IconName';

export type HelperTextConfig = {
  intent?: Partial<Record<HelperTextIntent, BaseProps>>;
  innerElements?: {
    iconContainer?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'component-gap-xSmall',
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
  innerElements: {
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '2xSmall',
    },
  },
} satisfies HelperTextConfig;

export const resolveIconName = (intent: HelperTextIntent): IconName<16> => {
  const iconConfig: Record<HelperTextIntent, IconName<16>> = {
    none: '16-info',
    success: '16-check',
    alert: '16-alert-full',
  };

  return iconConfig[intent];
};
