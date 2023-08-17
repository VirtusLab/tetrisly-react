import { SystemProps } from '@xstyled/styled-components';

import { StatusDotAppearance } from './StatusDotAppearance.type';

import { BaseProps } from '@/types/BaseProps';

type Config = {
  appearance: Record<StatusDotAppearance, SystemProps>;
  stroked: SystemProps;
};

export const config = {
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
} as const satisfies BaseProps & Config;
