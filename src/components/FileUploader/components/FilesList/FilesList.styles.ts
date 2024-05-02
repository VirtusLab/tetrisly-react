import type { BaseProps } from '@/types/BaseProps';

export type FilesListConfig = BaseProps;

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
} as const satisfies FilesListConfig;

export const filesListStyles = {
  defaultConfig,
};
