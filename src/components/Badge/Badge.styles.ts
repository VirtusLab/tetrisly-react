import { BadgeAppearance } from './BadgeAppearance.type';
import { BadgeIntent } from './BadgeIntent.type';

import { BaseProps } from '@/types/BaseProps';

export type BadgeConfig = {
  appearance?: Partial<
    Record<
      BadgeAppearance,
      Partial<Record<'high' | 'medium' | 'low', BaseProps>>
    >
  >;
  intent?: Partial<
    Record<BadgeIntent, Partial<Record<'high' | 'medium' | 'low', BaseProps>>>
  >;
  hasLabel?: BaseProps;
  innerElements?: {
    label?: BaseProps;
    iconContainer?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  w: 'fit-content',
  h: 'xSmall',
  borderRadius: 'large',
  flexShrink: 0,
  alignItems: 'center',
  gap: 'component-gap-xSmall',
  p: 'component-padding-xSmall',
  hasLabel: {
    px: 'component-padding-small',
  },
  appearance: {
    blue: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-blue-background-strong',
      },
      medium: {
        color: 'nonSemantic-blue-content-primary',
        backgroundColor: 'nonSemantic-blue-background-muted',
      },
      low: {
        color: 'nonSemantic-blue-content-primary',
        backgroundColor: 'nonSemantic-blue-background-onSubtle',
      },
    },
    green: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-green-background-strong',
      },
      medium: {
        color: 'nonSemantic-green-content-primary',
        backgroundColor: 'nonSemantic-green-background-muted',
      },
      low: {
        color: 'nonSemantic-green-content-primary',
        backgroundColor: 'nonSemantic-green-background-onSubtle',
      },
    },
    grey: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-grey-background-strong',
      },
      medium: {
        color: 'nonSemantic-grey-content-primary',
        backgroundColor: 'nonSemantic-grey-background-muted',
      },
      low: {
        color: 'nonSemantic-grey-content-primary',
        backgroundColor: 'nonSemantic-grey-background-onSubtle',
      },
    },
    red: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-red-background-strong',
      },
      medium: {
        color: 'nonSemantic-red-content-primary',
        backgroundColor: 'nonSemantic-red-background-muted',
      },
      low: {
        color: 'nonSemantic-red-content-primary',
        backgroundColor: 'nonSemantic-red-background-onSubtle',
      },
    },
    orange: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-orange-background-strong',
      },
      medium: {
        color: 'nonSemantic-orange-content-primary',
        backgroundColor: 'nonSemantic-orange-background-muted',
      },
      low: {
        color: 'nonSemantic-orange-content-primary',
        backgroundColor: 'nonSemantic-orange-background-onSubtle',
      },
    },
    raspberry: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-raspberry-background-strong',
      },
      medium: {
        color: 'nonSemantic-raspberry-content-primary',
        backgroundColor: 'nonSemantic-raspberry-background-muted',
      },
      low: {
        color: 'nonSemantic-raspberry-content-primary',
        backgroundColor: 'nonSemantic-raspberry-background-onSubtle',
      },
    },
    magenta: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-magenta-background-strong',
      },
      medium: {
        color: 'nonSemantic-magenta-content-primary',
        backgroundColor: 'nonSemantic-magenta-background-muted',
      },
      low: {
        color: 'nonSemantic-magenta-content-primary',
        backgroundColor: 'nonSemantic-magenta-background-onSubtle',
      },
    },
    purple: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-purple-background-strong',
      },
      medium: {
        color: 'nonSemantic-purple-content-primary',
        backgroundColor: 'nonSemantic-purple-background-muted',
      },
      low: {
        color: 'nonSemantic-purple-content-primary',
        backgroundColor: 'nonSemantic-purple-background-onSubtle',
      },
    },
    grape: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-grape-background-strong',
      },
      medium: {
        color: 'nonSemantic-grape-content-primary',
        backgroundColor: 'nonSemantic-grape-background-muted',
      },
      low: {
        color: 'nonSemantic-grape-content-primary',
        backgroundColor: 'nonSemantic-grape-background-onSubtle',
      },
    },
    violet: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-violet-background-strong',
      },
      medium: {
        color: 'nonSemantic-violet-content-primary',
        backgroundColor: 'nonSemantic-violet-background-muted',
      },
      low: {
        color: 'nonSemantic-violet-content-primary',
        backgroundColor: 'nonSemantic-violet-background-onSubtle',
      },
    },
    cyan: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-cyan-background-strong',
      },
      medium: {
        color: 'nonSemantic-cyan-content-primary',
        backgroundColor: 'nonSemantic-cyan-background-muted',
      },
      low: {
        color: 'nonSemantic-cyan-content-primary',
        backgroundColor: 'nonSemantic-cyan-background-onSubtle',
      },
    },
    teal: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-teal-background-strong',
      },
      medium: {
        color: 'nonSemantic-teal-content-primary',
        backgroundColor: 'nonSemantic-teal-background-muted',
      },
      low: {
        color: 'nonSemantic-teal-content-primary',
        backgroundColor: 'nonSemantic-teal-background-onSubtle',
      },
    },
    aquamarine: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-aquamarine-background-strong',
      },
      medium: {
        color: 'nonSemantic-aquamarine-content-primary',
        backgroundColor: 'nonSemantic-aquamarine-background-muted',
      },
      low: {
        color: 'nonSemantic-aquamarine-content-primary',
        backgroundColor: 'nonSemantic-aquamarine-background-onSubtle',
      },
    },
    emerald: {
      high: {
        color: 'nonSemantic-white-content-primary',
        backgroundColor: 'nonSemantic-emerald-background-strong',
      },
      medium: {
        color: 'nonSemantic-emerald-content-primary',
        backgroundColor: 'nonSemantic-emerald-background-muted',
      },
      low: {
        color: 'nonSemantic-emerald-content-primary',
        backgroundColor: 'nonSemantic-emerald-background-onSubtle',
      },
    },
    outline: {
      high: {
        border: '1px solid',
        borderColor: 'nonSemantic-grey-border-strong',
        color: 'nonSemantic-grey-content-primary',
        backgroundColor: 'nonSemantic-white-background-strong',
      },
      medium: {
        border: '1px solid',
        borderColor: 'nonSemantic-grey-border-strong',
        color: 'nonSemantic-grey-content-primary',
        backgroundColor: 'nonSemantic-white-background-strong',
      },
      low: {
        border: '1px solid',
        borderColor: 'nonSemantic-grey-border-strong',
        color: 'nonSemantic-grey-content-primary',
        backgroundColor: 'nonSemantic-white-background-strong',
      },
    },
  },
  intent: {
    neutral: {
      high: {
        color: 'content-primary-inverted',
        backgroundColor: 'background-neutral-strong',
      },
      medium: {
        color: 'content-primary',
        backgroundColor: 'background-neutral-muted',
      },
      low: {
        color: 'content-primary',
        backgroundColor: 'background-neutral-onSubtle',
      },
    },
    informative: {
      high: {
        color: 'content-primary-inverted',
        backgroundColor: 'background-informative-strong',
      },
      medium: {
        color: 'content-informative-primary',
        backgroundColor: 'background-informative-muted',
      },
      low: {
        color: 'content-informative-primary',
        backgroundColor: 'background-informative-onSubtle',
      },
    },
    positive: {
      high: {
        color: 'content-primary-inverted',
        backgroundColor: 'background-positive-strong',
      },
      medium: {
        color: 'content-positive-primary',
        backgroundColor: 'background-positive-muted',
      },
      low: {
        color: 'content-positive-primary',
        backgroundColor: 'background-positive-onSubtle',
      },
    },
    warning: {
      high: {
        color: 'content-primary',
        backgroundColor: 'background-warning-strong',
      },
      medium: {
        color: 'content-warning-primary',
        backgroundColor: 'background-warning-muted',
      },
      low: {
        color: 'content-warning-primary',
        backgroundColor: 'background-warning-onSubtle',
      },
    },
    negative: {
      high: {
        color: 'content-primary-inverted',
        backgroundColor: 'background-negative-strong',
      },
      medium: {
        color: 'content-negative-primary',
        backgroundColor: 'background-negative-muted',
      },
      low: {
        color: 'content-negative-primary',
        backgroundColor: 'background-negative-onSubtle',
      },
    },
  },
  innerElements: {
    label: {},
    iconContainer: {},
  },
} satisfies BadgeConfig;
