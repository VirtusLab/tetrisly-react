import type { StatusAppearance } from './StatusAppearance.type';

import { BaseProps } from '@/types';

export type StatusConfig = {
  appearance?: Partial<
    Record<
      StatusAppearance,
      { emphasis?: Partial<Record<'high' | 'medium' | 'low', BaseProps>> }
    >
  >;
  dot: {
    appearance: Partial<
      Record<
        StatusAppearance,
        { emphasis?: Partial<Record<'high' | 'medium' | 'low', BaseProps>> }
      >
    >;
  } & BaseProps<'appearance'>;
  hasLabel?: BaseProps;
  innerElements: {
    label?: BaseProps;
  };
} & BaseProps<'appearance'>;

export const defaultConfig = {
  display: 'flex',
  w: 'fit-content',
  h: '$size-xSmall',
  gap: '$space-component-gap-small',
  alignItems: 'center',
  text: '$typo-body-medium',
  dot: {
    w: '8px',
    h: '8px',
    borderRadius: '$border-radius-full',
    appearance: {
      grey: {
        emphasis: {
          high: {
            backgroundColor: '$color-nonSemantic-white-content-primary',
          },
          medium: {
            backgroundColor: '$color-nonSemantic-grey-background-strong',
          },
          low: {
            backgroundColor: '$color-nonSemantic-grey-background-strong',
          },
        },
      },
      blue: {
        emphasis: {
          high: {
            backgroundColor: '$color-nonSemantic-white-content-primary',
          },
          medium: {
            backgroundColor: '$color-nonSemantic-blue-background-strong',
          },
          low: {
            backgroundColor: '$color-nonSemantic-blue-background-strong',
          },
        },
      },
      green: {
        emphasis: {
          high: {
            backgroundColor: '$color-nonSemantic-white-content-primary',
          },
          medium: {
            backgroundColor: '$color-nonSemantic-green-background-strong',
          },
          low: {
            backgroundColor: '$color-nonSemantic-green-background-strong',
          },
        },
      },
      red: {
        emphasis: {
          high: {
            backgroundColor: '$color-nonSemantic-white-content-primary',
          },
          medium: {
            backgroundColor: '$color-nonSemantic-red-background-strong',
          },
          low: {
            backgroundColor: '$color-nonSemantic-red-background-strong',
          },
        },
      },
      orange: {
        emphasis: {
          high: {
            backgroundColor: '$color-nonSemantic-grey-content-primary',
          },
          medium: {
            backgroundColor: '$color-nonSemantic-orange-background-strong',
          },
          low: {
            backgroundColor: '$color-nonSemantic-orange-background-strong',
          },
        },
      },
    },
  },
  appearance: {
    grey: {
      emphasis: {
        high: {
          backgroundColor: '$color-nonSemantic-grey-background-strong',
          color: '$color-nonSemantic-white-content-primary',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        medium: {
          backgroundColor: '$color-nonSemantic-grey-background-muted',
          color: '$color-nonSemantic-grey-content-primary',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        low: {
          backgroundColor: '$color-transparent',
          color: '$color-nonSemantic-grey-content-primary',
          borderRadius: '$border-radius-medium',
        },
      },
    },
    blue: {
      emphasis: {
        high: {
          backgroundColor: '$color-nonSemantic-blue-background-strong',
          color: '$color-nonSemantic-white-content-primary',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        medium: {
          backgroundColor: '$color-nonSemantic-blue-background-muted',
          color: '$color-nonSemantic-blue-content-primary',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        low: {
          backgroundColor: '$color-transparent',
          color: '$color-nonSemantic-blue-content-primary',
        },
      },
    },
    green: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-green-background-strong',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        medium: {
          color: '$color-nonSemantic-green-content-primary',
          backgroundColor: '$color-nonSemantic-green-background-muted',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        low: {
          color: '$color-nonSemantic-green-content-primary',
        },
      },
    },
    red: {
      emphasis: {
        high: {
          color: '$color-nonSemantic-white-content-primary',
          backgroundColor: '$color-nonSemantic-red-background-strong',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        medium: {
          color: '$color-nonSemantic-red-content-primary',
          backgroundColor: '$color-nonSemantic-red-background-muted',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        low: {
          color: '$color-nonSemantic-red-content-primary',
          backgroundColor: '$color-transparent',
        },
      },
    },
    orange: {
      emphasis: {
        high: {
          backgroundColor: '$color-nonSemantic-orange-background-strong',
          color: '$color-nonSemantic-grey-content-primary',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        medium: {
          color: '$color-nonSemantic-orange-content-primary',
          backgroundColor: '$color-nonSemantic-orange-background-muted',
          p: '$space-component-padding-null $space-component-padding-small',
          borderRadius: '$border-radius-medium',
        },
        low: {
          color: '$color-nonSemantic-orange-content-primary',
          backgroundColor: '$color-transparent',
        },
      },
    },
  },
  innerElements: {
    label: {},
  },
} satisfies StatusConfig;

export const statusStyles = {
  defaultConfig,
};
