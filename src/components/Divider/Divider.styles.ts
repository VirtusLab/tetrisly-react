import type { DividerOrientation } from './types';

import type { BaseProps } from '@/types/BaseProps';

export type DividerConfig = {
  orientation?: Partial<Record<DividerOrientation, BaseProps>>;
} & BaseProps;

export const defaultConfig = {
  backgroundColor: '$color-border-default',
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

export const dividerStyles = {
  defaultConfig,
};
