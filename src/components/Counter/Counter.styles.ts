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
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 'full',
  padding: '0 component-padding-xSmall',
  minWidth: '20px',
  text: 'body-small',
  textAlign: 'center',
  appearance: {
    default: {
      emphasis: {
        high: {
          ring: 'small',
          ringColor: 'border-neutral-strong',
          backgroundColor: 'background-default',
          color: 'content-primary',
        },
        low: {
          ring: 'small',
          ringColor: 'border-neutral-subtle',
          backgroundColor: 'background-default',
          color: 'content-primary',
        },
      },
    },
    red: {
      emphasis: {
        high: {
          backgroundColor: 'nonSemantic-red-background-strong',
          color: 'nonSemantic-white-content-primary',
        },
        low: {
          backgroundColor: 'nonSemantic-red-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
      },
    },
    grey: {
      emphasis: {
        high: {
          backgroundColor: 'nonSemantic-grey-background-strong',
          color: 'nonSemantic-white-content-primary',
        },
        low: {
          backgroundColor: 'nonSemantic-grey-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
      },
    },
    blue: {
      emphasis: {
        high: {
          backgroundColor: 'nonSemantic-blue-background-strong',
          color: 'nonSemantic-white-content-primary',
        },
        low: {
          backgroundColor: 'nonSemantic-blue-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
      },
    },
    green: {
      emphasis: {
        high: {
          backgroundColor: 'nonSemantic-green-background-strong',
          color: 'nonSemantic-white-content-primary',
        },
        low: {
          backgroundColor: 'nonSemantic-green-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
      },
    },
    orange: {
      emphasis: {
        high: {
          backgroundColor: 'nonSemantic-orange-background-strong',
          color: 'nonSemantic-grey-content-primary',
        },
        low: {
          backgroundColor: 'nonSemantic-orange-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
      },
    },
  },
} satisfies CounterConfig;
