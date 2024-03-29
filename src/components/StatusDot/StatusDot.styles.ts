import type { StatusDotAppearance } from './types';

import type { BaseProps } from '@/types/BaseProps';

export type StatusDotConfig = {
  appearance?: Partial<Record<StatusDotAppearance, BaseProps>>;
  hasStroke?: BaseProps;
} & BaseProps<'appearance'>;

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
  hasStroke: {
    boxShadow: '0 0 #0000',
    ring: '$border-width-medium',
    ringColor: '$color-border-inverted',
  },
} satisfies StatusDotConfig;

export const statusDotStyles = {
  defaultConfig,
};
