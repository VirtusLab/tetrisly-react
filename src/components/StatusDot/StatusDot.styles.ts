import { SystemProps } from '@xstyled/styled-components';

import { StatusDotProps } from './StatusDot.props';

type Config = {
  appearance: Record<StatusDotProps['appearance'], SystemProps>;
  stroked: SystemProps;
};

export const commonConfig = {
  w: '12px',
  h: '12px',
  borderRadius: 'full',
};

export const config = {
  ...commonConfig,
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
} as const satisfies Config;
