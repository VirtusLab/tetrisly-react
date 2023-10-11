import type { StatusDotAppearance } from './types';

import type { BaseProps } from '@/types/BaseProps';

export type StatusDotConfig = {
  appearance?: Partial<Record<StatusDotAppearance, BaseProps>>;
  stroked?: BaseProps;
} & BaseProps;

export const defaultConfig = {
  w: '12px',
  h: '12px',
  borderRadius: '$border-radius-full',
  appearance: {
    red: {
      backgroundColor: '$color-nonSemantic-red-background-strong',
    },
    green: {
      backgroundColor: '$color-nonSemantic-green-background-strong',
    },
    orange: {
      backgroundColor: '$color-nonSemantic-orange-background-strong',
    },
  },
  stroked: {
    ring: '$border-width-medium',
    ringColor: '$color-border-inverted',
  },
} satisfies StatusDotConfig;
