import { SystemProps } from '@xstyled/styled-components';

import { DividerOrientation } from './DividerOrientation.type';

import { BaseProps } from '@/types/BaseProps';

export type DividerConfig = {
  orientation: Record<DividerOrientation, SystemProps>;
} & BaseProps;

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
} satisfies DividerConfig;
