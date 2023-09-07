import type { BaseProps } from '@/types/BaseProps';

export type LabelConfig = {
  innerElements?: {
    tooltip?: BaseProps;
    optional?: BaseProps;
    action?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  text: 'medium-175',
  color: 'content-primary',
  display: 'flex',
  alignItems: 'flex-start',
  gap: 'component-gap-xSmall',
  innerElements: {
    tooltip: {
      color: 'content-secondary',
      display: 'flex',
      alignItems: 'center',
      minHeight: 'xSmall',
    },
    optional: {
      color: 'content-tertiary',
    },
    action: {
      ml: 'auto',
    },
  },
} satisfies LabelConfig;
