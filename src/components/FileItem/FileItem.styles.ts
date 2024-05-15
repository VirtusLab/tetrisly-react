import { compressedVariantStyles, extendedVariantStyles } from './components';

import type { BaseProps } from '@/types/BaseProps';

export type FileItemConfig = BaseProps & {
  state?: {
    uploading?: BaseProps;
    uploaded?: BaseProps;
    replaceable?: BaseProps;
    alert?: BaseProps;
  };
  inverted?: BaseProps;
  invertedAlert?: BaseProps;
  compressed?: BaseProps;
  extended?: BaseProps;
};

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
  borderRadius: '$border-radius-large',
  state: {
    uploading: {
      backgroundColor: '$color-interaction-neutral-subtle-normal',
    },
    uploaded: {
      backgroundColor: '$color-interaction-default-subtle-normal',
    },
    replaceable: {
      backgroundColor: '$color-interaction-default-subtle-normal',
    },
    alert: {
      backgroundColor: '$color-interaction-alert-subtle-normal',
    },
  },
  inverted: {
    backgroundColor: '$color-interaction-background-formField',
    borderWidth: '$border-width-small',
    borderStyle: '$border-style-solid',
    borderColor: '$color-interaction-border-neutral-normal',
  },
  invertedAlert: {
    borderColor: '$color-interaction-border-alert',
  },
  compressed: compressedVariantStyles.defaultConfig,
  extended: extendedVariantStyles.defaultConfig,
} as const satisfies FileItemConfig;

export const fileItemStyles = {
  defaultConfig,
};
