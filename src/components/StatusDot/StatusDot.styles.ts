import type { StatusDotAppearance } from './types';

import type { BaseProps } from '@/types/BaseProps';

export type StatusDotConfig = {
  appearance?: Partial<Record<StatusDotAppearance, BaseProps>>;
  stroked?: BaseProps;
} & BaseProps;

export const defaultConfig = {
  w: '12px',
  h: '12px',
  borderRadius: 'full',
  appearance: {
    red: {
      backgroundColor: 'nonSemantic-red-background-strong',
    },
    green: {
      backgroundColor: 'nonSemantic-green-background-strong',
    },
    orange: {
      backgroundColor: 'nonSemantic-orange-background-strong',
    },
  },
  stroked: {
    ring: 'medium',
    ringColor: 'border-inverted',
  },
} satisfies StatusDotConfig;
