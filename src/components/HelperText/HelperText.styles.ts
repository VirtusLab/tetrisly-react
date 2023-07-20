import { SystemProps } from '@xstyled/styled-components';

import { HelperTextProps } from './HelperText.props';

type Config = {
  intent: Record<HelperTextProps['intent'], SystemProps>;
};

const commonConfig = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'component-gap-large',
  text: 'medium-150',
};

export const config = {
  ...commonConfig,
  intent: {
    none: {
      color: 'content-secondary',
    },
    alert: {
      color: 'content-negative-secondary',
    },
    success: {
      color: 'content-positive-secondary',
    },
  },
} as const satisfies Config;
