import type { BaseProps } from '@/types/BaseProps';

export type CompressedVariantConfig = BaseProps & {
  innerElements?: {
    fileInfo?: BaseProps;
    fileName?: BaseProps;
    fileSize?: BaseProps;
    content?: BaseProps;
    uploadingContent?: BaseProps;
    replaceableContent?: BaseProps;
    alertContent?: BaseProps;
    notExtendedAlert?: BaseProps;
    closeIconButton?: BaseProps;
  };
};

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-xSmall',
  px: '$space-component-padding-large',
  py: '$space-component-padding-small',
  innerElements: {
    fileInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '$space-component-gap-small',
    },
    fileName: {
      text: '$typo-medium-175',
      color: '$color-content-primary',
    },
    fileSize: {
      text: '$typo-medium-175',
      color: '$color-content-secondary',
    },
    content: {
      flexGrow: 1,
      mx: '$space-component-padding-large',
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
    notExtendedAlert: {
      text: '$typo-body-small',
      color: '$color-content-negative-secondary',
    },
    closeIconButton: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
} as const satisfies CompressedVariantConfig;

export const compressedVariantStyles = {
  defaultConfig,
};
