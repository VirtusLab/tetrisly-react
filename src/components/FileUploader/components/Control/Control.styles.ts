import type { BaseProps } from '@/types/BaseProps';

export type ControlConfig = BaseProps;

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
} as const satisfies ControlConfig;

export const controlStyles = {
  defaultConfig,
};
