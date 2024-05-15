import { ProgressBarConfig, progressBarStyles } from '../ProgressBar';

import type { BaseProps } from '@/types/BaseProps';

export type ExtendedVariantConfig = BaseProps & {
  thumbnailWrapper?: BaseProps;
  fileDetails?: BaseProps;
  topDetails?: BaseProps;
  bottomDetails?: BaseProps;
  innerElements?: {
    fileThumbnail?: BaseProps;
    photoThumbnail?: BaseProps;
    fileName?: BaseProps;
    fileSize?: BaseProps;
    timeLeft?: BaseProps;
    dot?: BaseProps;
    uploadedPercentage?: BaseProps;
    uploadingContent?: BaseProps;
    replaceableContent?: BaseProps;
    alertContent?: BaseProps;
    closeIconButton?: BaseProps;
    alert?: BaseProps;
    alertIcon?: BaseProps;
    fileSizeAlert?: BaseProps;
    progressBar?: ProgressBarConfig;
  };
};

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
  padding: '$space-component-padding-large',
  thumbnailWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '$space-component-gap-large',
  },
  fileDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$space-component-gap-xSmall',
    flexGrow: 1,
  },
  topDetails: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  bottomDetails: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  innerElements: {
    fileThumbnail: {
      paddingTop: '$space-component-padding-xSmall',
    },
    photoThumbnail: {
      paddingTop: '$space-component-padding-small',
    },
    fileName: {
      text: '$typo-medium-175',
      color: '$color-content-primary',
    },
    fileSize: {
      text: '$typo-medium-175',
      color: '$color-content-secondary',
    },
    timeLeft: {
      text: '$typo-medium-175',
      color: '$color-content-secondary',
    },
    dot: {
      display: 'inline-block',
      mx: '$space-component-gap-small',
      w: '2px',
      h: '2px',
      backgroundColor: '$color-content-secondary',
      verticalAlign: 'middle',
    },
    uploadedPercentage: {
      text: '$typo-medium-175',
      color: '$color-content-secondary',
    },
    uploadingContent: {},
    replaceableContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    alertContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    closeIconButton: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    alert: {
      display: 'flex',
      gap: '$space-component-gap-xSmall',
      alignItems: 'center',
      text: '$typo-body-small',
      color: '$color-content-negative-secondary',
    },
    alertIcon: {
      color: '$color-content-negative-secondary',
    },
    fileSizeAlert: {
      text: '$typo-body-small',
      color: '$color-content-secondary',
    },
    progressBar: progressBarStyles.defaultConfig,
  },
} as const satisfies ExtendedVariantConfig;

export const extendedVariantStyles = {
  defaultConfig,
};
