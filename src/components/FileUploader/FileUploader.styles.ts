import type { BaseProps } from '@/types/BaseProps';

export type FileUploaderConfig = {
  hasStroke?: BaseProps;
} & BaseProps<'appearance'>;

export const defaultConfig = {
  w: '12px',
  h: '12px',
  borderRadius: '$border-radius-full',
  hasStroke: {
    boxShadow: '0 0 #0000',
    ring: '$border-width-medium',
    ringColor: '$color-border-inverted',
  },
} satisfies FileUploaderConfig;

export const fileUploaderStyles = {
  defaultConfig,
};
