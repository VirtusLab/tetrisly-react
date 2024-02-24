import type { BaseProps } from '@/types/BaseProps';

export type CardConfig = BaseProps;

export const cardConfig = {
  display: 'flex',
  w: 'fit-content',
  p: '$space-component-padding-null',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$space-component-padding-null',
  borderRadius: '$border-radius-xLarge',
  bg: '$color-background-default',
  boxShadow: '$elevation-bottom-200',
  overflow: 'hidden',
} as const satisfies CardConfig;
