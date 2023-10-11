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
  gap: '$space-component-gap-xSmall',
  text: '$typo-body-small',
  intent: {
    none: {
      color: '$color-content-secondary',
    },
    alert: {
      color: '$color-content-negative-secondary',
    },
    success: {
      color: '$color-content-positive-secondary',
    },
  },
  innerElements: {
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '$size-2xSmall',
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
