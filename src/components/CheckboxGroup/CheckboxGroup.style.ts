import { SystemProps } from '@xstyled/styled-components';

import { Theme } from '@/theme';

type Config = {
  checkboxContainer: SystemProps;
};

export const config = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'component-gap-small',
  checkboxContainer: {
    display: 'grid',
    gap: 'component-gap-small component-gap-large',
  },
} as const satisfies SystemProps<Theme> & Config;
