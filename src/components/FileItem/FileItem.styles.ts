import { compressedVariantStyles, extendedVariantStyles } from './components';
import { FileItemThumbnail } from './types';

import type { BaseProps } from '@/types/BaseProps';

export type FileItemConfig = BaseProps & {
  state?: {
    uploading?: BaseProps;
    uploaded?: BaseProps;
    replaceable?: BaseProps;
    alert?: BaseProps;
  };
  inverted?: {
    yes?: BaseProps;
    no?: BaseProps;
  };
  thumbnail?: Record<FileItemThumbnail, BaseProps>;
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
    yes: {
      backgroundColor: '$color-interaction-background-formField',
      borderWidth: '$border-width-100',
      borderStyle: '$border-style-solid',
      borderColor: '$color-interaction-border-neutral-normal',
    },
    no: {},
  },
  thumbnail: {
    none: {},
    file: {},
    photo: {},
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
