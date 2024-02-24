import type { BaseProps } from '@/types';

export type CardFooterConfig = BaseProps & {
  innerElements?: {
    actions?: BaseProps;
  };
};

export const cardFooterConfig = {
  display: 'flex',
  px: '$space-component-padding-medium',
  pb: '$space-component-padding-medium',
  w: '100%',
  innerElements: {
    actions: {
      w: '100%',
      display: 'flex',
      padding: '$space-component-padding-null',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '$space-component-gap-small',
    },
  },
} as const satisfies CardFooterConfig;
