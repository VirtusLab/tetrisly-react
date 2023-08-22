import { SystemProps } from '@xstyled/styled-components';

import { DividerOrientation } from './DividerOrientation.type';

import { BaseProps } from '@/types/BaseProps';

type Custom = {
  orientation: Record<DividerOrientation, SystemProps>;
};

export const config = {
  backgroundColor: 'border-default',
  orientation: {
    horizontal: {
      w: '100%',
      h: '1px',
    },
    vertical: {
      w: '1px',
      h: '100%',
    },
  },
} as const satisfies BaseProps & Custom;
