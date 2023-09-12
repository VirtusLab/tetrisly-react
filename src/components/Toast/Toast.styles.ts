import type { ToastIntent } from './types';
import { ButtonProps } from '../Button';

import { BaseProps } from '@/types/BaseProps';
import { Emphasis } from '@/types/Emphasis';
import { IconName } from '@/utility-types/IconName';

export type ToastConfig = {
  emphasis: Record<Emphasis, BaseProps>;
  intent: Record<ToastIntent, BaseProps>;
  closeButton: BaseProps;
  innerElements: {
    iconContainer: {
      intent: Record<ToastIntent, { emphasis: Record<Emphasis, BaseProps> }>;
    } & BaseProps;
    actionContainer: BaseProps;
    middleDot: {
      emphasis: Record<Emphasis, BaseProps | Partial<ButtonProps<'bare'>>>;
    } & BaseProps;
    closeButton: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  alignItems: 'center',
  p: 'component-padding-medium component-padding-large',
  padding: 'component-padding-medium component-padding-large',
  borderRadius: 'large',
  emphasis: {
    high: {},
    low: {
      backgroundColor: 'interaction-background-modeless',
      color: 'content-primary',
      ringColor: 'border-defaultA',
      ring: 'small',
      boxShadow: 'bottom-200',
    },
  },
  intent: {
    neutral: {
      backgroundColor: 'background-inverted',
      color: 'content-primary-inverted',
    },
    informative: {
      backgroundColor: 'background-informative-strong',
      color: 'content-primary-inverted',
      pl: 'component-padding-medium',
    },
    success: {
      backgroundColor: 'background-positive-strong',
      color: 'content-primary-inverted',
      pl: 'component-padding-medium',
    },
    warning: {
      backgroundColor: 'background-warning-strong',
      color: 'content-primary',
      pl: 'component-padding-medium',
    },
    negative: {
      backgroundColor: 'background-negative-strong',
      color: 'content-primary-inverted',
      pl: 'component-padding-medium',
    },
  },
  closeButton: {
    pr: 'component-padding-small',
  },
  innerElements: {
    iconContainer: {
      intent: {
        neutral: { emphasis: { low: {}, high: {} } },
        informative: {
          emphasis: {
            low: {
              color: 'content-informative-secondary',
            },
            high: {
              color: 'content-primary-inverted',
            },
          },
        },
        success: {
          emphasis: {
            low: {
              color: 'content-positive-secondary',
            },
            high: {
              color: 'content-primary-inverted',
            },
          },
        },
        warning: {
          emphasis: {
            low: {
              color: 'content-warning-secondary',
            },
            high: {
              color: 'content-primary',
            },
          },
        },
        negative: {
          emphasis: {
            low: {
              color: 'content-negative-secondary',
            },
            high: {
              color: 'content-primary-inverted',
            },
          },
        },
      },
      mr: 'component-gap-small',
    },
    actionContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'component-gap-small',
      ml: 'component-gap-xLarge',
    },
    middleDot: {
      emphasis: {
        high: {
          color: 'content-secondary-inverted',
        },
        low: {
          color: 'content-tertiary',
        },
      },
      text: 'body-medium',
    },
    closeButton: {
      ml: 'component-padding-large',
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
