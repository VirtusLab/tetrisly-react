import type { CounterAppearance } from './types';

import type { BaseProps } from '@/types/BaseProps';
import { Emphasis } from '@/types/Emphasis';

export type CounterConfig = {
  emphasis?: Partial<
    Record<
      Emphasis,
      {
        appearance?: Partial<Record<CounterAppearance, BaseProps>>;
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
  emphasis: {
    high: {
      appearance: {
        default: {
          ring: 'small',
          ringColor: 'border-neutral-strong',
          backgroundColor: 'background-default',
          color: 'content-primary',
        },
        red: {
          backgroundColor: 'nonSemantic-red-background-strong',
          color: 'nonSemantic-white-content-primary',
        },
        grey: {
          backgroundColor: 'nonSemantic-grey-background-strong',
          color: 'nonSemantic-white-content-primary',
        },
        blue: {
          backgroundColor: 'nonSemantic-blue-background-strong',
          color: 'nonSemantic-white-content-primary',
        },
        green: {
          backgroundColor: 'nonSemantic-green-background-strong',
          color: 'nonSemantic-white-content-primary',
        },
        orange: {
          backgroundColor: 'nonSemantic-orange-background-strong',
          color: 'nonSemantic-grey-content-primary',
        },
      },
    },
    low: {
      appearance: {
        default: {
          ring: 'small',
          ringColor: 'border-neutral-subtle',
          backgroundColor: 'background-default',
          color: 'content-primary',
        },
        red: {
          backgroundColor: 'nonSemantic-red-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
        grey: {
          backgroundColor: 'nonSemantic-grey-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
        blue: {
          backgroundColor: 'nonSemantic-blue-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
        green: {
          backgroundColor: 'nonSemantic-green-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
        orange: {
          backgroundColor: 'nonSemantic-orange-background-onSubtle',
          color: 'nonSemantic-grey-content-primary',
        },
      },
    },
  },
} satisfies CounterConfig;
