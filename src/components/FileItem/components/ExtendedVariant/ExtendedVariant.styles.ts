import type { BaseProps } from '@/types/BaseProps';

export type ExtendedVariantConfig = BaseProps & {
  innerElements?: {
    fileName?: BaseProps;
    fileSize?: BaseProps;
    timeLeft?: BaseProps;
    uploadedPercentage?: BaseProps;
    uploadingContent?: BaseProps;
    replaceableContent?: BaseProps;
    alertContent?: BaseProps;
    closeIconButton?: BaseProps;
    alert?: BaseProps;
    fileSizeAlert?: BaseProps;
  };
};

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
  padding: '$space-component-padding-large',
  innerElements: {
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
    fileSizeAlert: {
      text: '$typo-body-small',
      color: '$color-content-secondary',
    },
  },
} as const satisfies ExtendedVariantConfig;

export const extendedVariantStyles = {
  defaultConfig,
};
