import { BaseProps } from '@/types';

export type CardContentConfig = BaseProps;

export const cardContentConfig = {
  padding: '$space-component-padding-2xLarge',
  w: '100%',
} as const satisfies CardContentConfig;
