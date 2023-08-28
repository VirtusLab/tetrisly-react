import { SystemProps } from '@xstyled/styled-components';

import { BaseProps } from '@/types/BaseProps';

export type CheckboxGroupConfig = {
  innerElements: {
    checkboxContainer: SystemProps;
  };
} & BaseProps;

export const config = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'component-gap-small',
  innerElements: {
    checkboxContainer: {
      display: 'grid',
      gap: 'component-gap-small component-gap-large',
    },
  },
} satisfies CheckboxGroupConfig;