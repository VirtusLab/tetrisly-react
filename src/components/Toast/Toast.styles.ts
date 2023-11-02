import type { ToastEmphasis, ToastIntent } from './types';
import { BareButtonProps } from '../Button/Button.props';

import type { BaseProps } from '@/types/BaseProps';
import type { IconName } from '@/utility-types/IconName';

export type ToastConfig = {
  emphasis?: Partial<Record<ToastEmphasis, BaseProps>>;
  intent?: Partial<Record<ToastIntent, BaseProps>>;
  closeButton?: BaseProps;
  innerElements?: {
    iconContainer?: {
      intent: Partial<
        Record<
          ToastIntent,
          { emphasis: Partial<Record<ToastEmphasis, BaseProps>> }
        >
      >;
    } & BaseProps;
    actionContainer?: BaseProps;
    middleDot?: {
      emphasis: Partial<
        Record<ToastEmphasis, BaseProps | Partial<BareButtonProps>>
      >;
    } & BaseProps;
    closeButton?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  alignItems: 'center',
  h: '48px',
  padding: '$space-component-padding-medium $space-component-padding-large',
  borderRadius: '$border-radius-large',
  emphasis: {
    high: {},
    low: {
      backgroundColor: '$color-interaction-background-modeless',
      color: '$color-content-primary',
      ringColor: '$color-border-defaultA',
      ring: '$border-width-small',
      boxShadow: '$elevation-bottom-200',
    },
  },
  intent: {
    neutral: {
      backgroundColor: '$color-background-inverted',
      color: '$color-content-primary-inverted',
    },
    informative: {
      backgroundColor: '$color-background-informative-strong',
      color: '$color-content-primary-inverted',
      pl: '$space-component-padding-medium',
    },
    success: {
      backgroundColor: '$color-background-positive-strong',
      color: '$color-content-primary-inverted',
      pl: '$space-component-padding-medium',
    },
    warning: {
      backgroundColor: '$color-background-warning-strong',
      color: '$color-content-primary',
      pl: '$space-component-padding-medium',
    },
    negative: {
      backgroundColor: '$color-background-negative-strong',
      color: '$color-content-primary-inverted',
      pl: '$space-component-padding-medium',
    },
  },
  closeButton: {
    pr: '$space-component-padding-small',
  },
  innerElements: {
    iconContainer: {
      intent: {
        neutral: { emphasis: { low: {}, high: {} } },
        informative: {
          emphasis: {
            low: {
              color: '$color-content-informative-secondary',
            },
            high: {
              color: '$color-content-primary-inverted',
            },
          },
        },
        success: {
          emphasis: {
            low: {
              color: '$color-content-positive-secondary',
            },
            high: {
              color: '$color-content-primary-inverted',
            },
          },
        },
        warning: {
          emphasis: {
            low: {
              color: '$color-content-warning-secondary',
            },
            high: {
              color: '$color-content-primary',
            },
          },
        },
        negative: {
          emphasis: {
            low: {
              color: '$color-content-negative-secondary',
            },
            high: {
              color: '$color-content-primary-inverted',
            },
          },
        },
      },
      mr: '$space-component-gap-small',
    },
    actionContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$space-component-gap-small',
      ml: '$space-component-gap-xLarge',
    },
    middleDot: {
      emphasis: {
        high: {
          color: '$color-content-secondary-inverted',
        },
        low: {
          color: '$color-content-tertiary',
        },
      },
      text: '$typo-body-medium',
    },
    closeButton: {
      ml: '$space-component-padding-large',
    },
  },
} satisfies ToastConfig;

export const resolveIconName = (intent: ToastIntent): IconName<20> | null => {
  const iconConfig: Record<ToastIntent, IconName<20> | null> = {
    neutral: null,
    informative: '20-info-fill',
    success: '20-check-circle-fill',
    warning: '20-warning-fill',
    negative: '20-alert-fill',
  };

  return iconConfig[intent];
};
