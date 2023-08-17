import { SystemProps } from '@xstyled/styled-components';

import { DividerOrientation } from './DividerOrientation.type';

import { BaseConfigProps } from '@/utility-types/BaseConfigProps';

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
} as const satisfies BaseConfigProps & Custom;
