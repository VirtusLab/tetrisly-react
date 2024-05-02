import { FileItemThumbnail } from './types';

import type { BaseProps } from '@/types/BaseProps';

export type FileItemConfig = BaseProps & {
  fileName?: BaseProps;
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
  extended?: {
    yes?: BaseProps;
    no?: BaseProps;
  };
  thumbnail?: Record<FileItemThumbnail, BaseProps>;
  invertedAlert?: BaseProps;
  innerElements?: {
    fileName?: BaseProps;
    fileSize?: BaseProps;
    progressBar?: BaseProps;
    progressBarContainer?: BaseProps;
    progressBarSent?: BaseProps;
    progressBarTrack?: BaseProps;
  };
};

export const defaultConfig = {
  display: 'flex',
  gap: '$space-component-gap-small',
  justifyContent: 'space-between',
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
  extended: {
    yes: {
      padding: '$space-component-padding-large',
    },
    no: {
      padding: '$space-component-padding-small',
      alignItems: 'center',
    },
  },
  thumbnail: {
    none: {},
    file: {},
    photo: {},
  },

  invertedAlert: {
    borderColor: '$color-interaction-border-alert',
  },

  innerElements: {
    fileName: {
      text: '$typo-medium-175',
      color: '$color-content-primary',
    },
    fileSize: {
      text: '$typo-medium-175',
      color: '$color-content-secondary',
    },
    progressBar: {
      flex: 1,
    },
    progressBarTrack: {
      mx: '$space-component-padding-large',
      h: '4px',
      backgroundColor: '$color-interaction-inverted-normal',
      borderRadius: '$border-radius-small',
    },
    progressBarSent: {
      w: '50%',
      h: '100%',
      borderRadius: '$border-radius-small',
      backgroundColor: '$color-interaction-default-normal',
    },
  },
} as const satisfies FileItemConfig;

export const fileItemStyles = {
  defaultConfig,
};
