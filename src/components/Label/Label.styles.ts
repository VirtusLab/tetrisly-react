import type { BaseProps } from '@/types/BaseProps';

export type LabelConfig = {
  innerElements?: {
    tooltip?: BaseProps;
    optional?: BaseProps;
    action?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  text: '$typo-body-medium',
  color: '$color-content-primary',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$space-component-gap-xSmall',
  innerElements: {
    tooltip: {
      color: '$color-content-secondary',
      display: 'flex',
      alignItems: 'center',
      minHeight: '$size-xSmall',
    },
    optional: {
      color: '$color-content-tertiary',
    },
    action: {
      ml: 'auto',
    },
  },
} satisfies LabelConfig;
