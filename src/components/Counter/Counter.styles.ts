import type { CounterAppearance } from './types';

import type { BaseProps } from '@/types/BaseProps';
import { Emphasis } from '@/types/Emphasis';

export type CounterConfig = {
  appearance?: Partial<
    Record<
      CounterAppearance,
      {
        emphasis?: Partial<Record<Emphasis, BaseProps>>;
      }
    >
  >;
} & BaseProps<'appearance'>;

export const defaultConfig = {
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$border-radius-full',
  padding: '0 $space-component-padding-xSmall',
  minWidth: '20px',
  text: '$typo-body-small',
  textAlign: 'center',
  appearance: {
    default: {
      emphasis: {
        high: {
          boxShadow: '0 0 #0000',
          ring: '$border-width-small',
          ringColor: '$color-border-neutral-strong',
          backgroundColor: '$color-background-default',
          color: '$color-content-primary',
        },
        low: {
          boxShadow: '0 0 #0000',
          ring: '$border-width-small',
          ringColor: '$color-border-neutral-subtle',
          backgroundColor: '$color-background-default',
          color: '$color-content-primary',
        },
      },
    },
    red: {
      emphasis: {
        high: {
          backgroundColor: '$color-nonSemantic-red-background-strong',
          color: '$color-nonSemantic-white-content-primary',
        },
        low: {
          backgroundColor: '$color-nonSemantic-red-background-onSubtle',
          color: '$color-nonSemantic-grey-content-primary',
        },
      },
    },
    grey: {
      emphasis: {
        high: {
          backgroundColor: '$color-nonSemantic-grey-background-strong',
          color: '$color-nonSemantic-white-content-primary',
        },
        low: {
          backgroundColor: '$color-nonSemantic-grey-background-onSubtle',
          color: '$color-nonSemantic-grey-content-primary',
        },
      },
    },
    blue: {
      emphasis: {
        high: {
          backgroundColor: '$color-nonSemantic-blue-background-strong',
          color: '$color-nonSemantic-white-content-primary',
        },
        low: {
          backgroundColor: '$color-nonSemantic-blue-background-onSubtle',
          color: '$color-nonSemantic-grey-content-primary',
        },
      },
    },
    green: {
      emphasis: {
        high: {
          backgroundColor: '$color-nonSemantic-green-background-strong',
          color: '$color-nonSemantic-white-content-primary',
        },
        low: {
          backgroundColor: '$color-nonSemantic-green-background-onSubtle',
          color: '$color-nonSemantic-grey-content-primary',
        },
      },
    },
    orange: {
      emphasis: {
        high: {
          backgroundColor: '$color-nonSemantic-orange-background-strong',
          color: '$color-nonSemantic-grey-content-primary',
        },
        low: {
          backgroundColor: '$color-nonSemantic-orange-background-onSubtle',
          color: '$color-nonSemantic-grey-content-primary',
        },
      },
    },
  },
} satisfies CounterConfig;

export const counterStyles = {
  defaultConfig,
};
