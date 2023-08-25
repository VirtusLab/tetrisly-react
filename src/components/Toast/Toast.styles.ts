import { IconProps } from '@virtuslab/tetrisly-icons';

import type { ToastIntent } from './types';
import { ButtonProps } from '../Button';

import { BaseProps } from '@/types/BaseProps';
import { Emphasis } from '@/types/Emphasis';

type EmphasisProps<T extends object = object> = Record<
  'emphasis',
  Record<Emphasis, BaseProps | Partial<T>>
>;

export type ToastConfig = {
  emphasis: Record<Emphasis, BaseProps>;
  intent: Record<ToastIntent, BaseProps>;
  closeButton: BaseProps;
  innerElements: {
    icon: { intent: Record<ToastIntent, Partial<IconProps>> } | BaseProps;
    iconContainer:
      | {
          intent: Record<
            ToastIntent,
            { emphasis: Record<Emphasis, BaseProps> }
          >;
        }
      | BaseProps;
    action:
      | EmphasisProps<ButtonProps<'bare'>>
      | ButtonProps<'bare'>
      | BaseProps;
    actionContainer: BaseProps;
    middleDot: EmphasisProps | BaseProps;
    closeButton: BaseProps;
  };
} & BaseProps;

export const config = {
  display: 'inline-flex',
  alignItems: 'center',
  p: 'component-padding-medium component-padding-large',
  padding: 'component-padding-medium component-padding-large',
  gap: 'component-gap-small',
  borderRadius: 'large',
  emphasis: {
    high: {
      color: 'content-primary-inverted',
    },
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
    },
    informative: {
      backgroundColor: 'background-informative-strong',
      pl: 'component-padding-medium',
    },
    success: {
      backgroundColor: 'background-positive-strong',
      pl: 'component-padding-medium',
    },
    warning: {
      backgroundColor: 'background-warning-strong',
      color: 'content-primary',
      pl: 'component-padding-medium',
    },
    negative: {
      backgroundColor: 'background-negative-strong',
      pl: 'component-padding-medium',
    },
  },
  closeButton: {
    pr: 'component-padding-small',
  },
  innerElements: {
    icon: {
      intent: {
        neutral: {},
        informative: {
          name: '20-info-fill',
        },
        success: {
          name: '20-check-circle-fill',
        },
        warning: {
          name: '20-warning-fill',
        },
        negative: {
          name: '20-alert-fill',
        },
      },
    },
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
    },
    action: {
      emphasis: {
        high: {
          appearance: 'inverted',
        },
        low: {
          appearance: 'primary',
        },
      },
      variant: 'bare',
      intent: 'none',
    },
    actionContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'component-gap-small',
      ml: 'component-padding-large',
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
      p: '6px',
      ml: 'component-padding-small',
    },
  },
} satisfies ToastConfig;
