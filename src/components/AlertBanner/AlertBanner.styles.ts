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
  p: 'component-padding-medium',
  pl: 'component-padding-2xLarge',
  display: 'flex',
  alignItems: 'center',
  text: 'body-medium',
  intent: {
    none: {
      backgroundColor: 'background-neutral-strong',
      color: 'content-primary-inverted',
    },
    positive: {
      backgroundColor: 'background-positive-strong',
      color: 'content-primary-inverted',
    },
    warning: {
      backgroundColor: 'background-warning-strong',
      color: 'content-primary',
    },
    negative: {
      backgroundColor: 'background-negative-strong',
      color: 'content-primary-inverted',
    },
  },
  innerElements: {
    iconContainer: {
      mr: 'component-gap-small',
    },
    actionContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'component-gap-small',
      ml: 'component-gap-large',
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
