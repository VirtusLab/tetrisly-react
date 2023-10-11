import { AlertBannerIntent } from './types/AlertBannerIntent.type';

import { BaseProps } from '@/types/BaseProps';
import { IconName } from '@/utility-types/IconName';

export type AlertBannerConfig = {
  intent?: Partial<Record<AlertBannerIntent, BaseProps>>;
  innerElements?: {
    iconContainer?: BaseProps;
    actionContainer?: BaseProps;
    closeButton?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  p: '$space-component-padding-medium',
  pl: '$space-component-padding-2xLarge',
  display: 'flex',
  alignItems: 'center',
  text: '$typo-body-medium',
  intent: {
    none: {
      backgroundColor: '$color-background-neutral-strong',
      color: '$color-content-primary-inverted',
    },
    positive: {
      backgroundColor: '$color-background-positive-strong',
      color: '$color-content-primary-inverted',
    },
    warning: {
      backgroundColor: '$color-background-warning-strong',
      color: '$color-content-primary',
    },
    negative: {
      backgroundColor: '$color-background-negative-strong',
      color: '$color-content-primary-inverted',
    },
  },
  innerElements: {
    iconContainer: {
      mr: '$space-component-gap-small',
    },
    actionContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$space-component-gap-small',
      ml: '$space-component-gap-large',
    },
    closeButton: {
      ml: 'auto',
    },
  },
} satisfies AlertBannerConfig;

export const resolveIconName = (intent: AlertBannerIntent): IconName<20> => {
  const iconConfig: Record<AlertBannerIntent, IconName<20>> = {
    none: '20-info-fill',
    positive: '20-info-fill',
    warning: '20-warning-fill',
    negative: '20-alert-fill',
  };

  return iconConfig[intent];
};
