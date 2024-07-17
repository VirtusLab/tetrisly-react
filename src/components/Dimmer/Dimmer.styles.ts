import type { BaseProps } from '@/types/BaseProps';

export type DimmerConfig = BaseProps;

export const defaultConfig = {
  w: '100%',
  h: '100%',
  backgroundColor: '$color-interaction-background-dimmer',
  top: 0,
  left: 0,
  position: 'absolute',
  zIndex: 3,
} satisfies DimmerConfig;

export const dimmerStyles = {
  defaultConfig,
};
