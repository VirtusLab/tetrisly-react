import { ExtendedVariantConfig, defaultConfig } from './ExtendedVariant.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type ExtendedVariantStylesBuilder = {
  container: BaseProps;
  fileName: BaseProps;
  fileSize: BaseProps;
  timeLeft: BaseProps;
  uploadedPercentage: BaseProps;
  uploadingContent: BaseProps;
  replaceableContent: BaseProps;
  alertContent: BaseProps;
  closeIconButton: BaseProps;
  alert: BaseProps;
  fileSizeAlert: BaseProps;
};

export const stylesBuilder = (
  custom?: ExtendedVariantConfig,
): ExtendedVariantStylesBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return {
    container,
    fileName: innerElements.fileName,
    fileSize: innerElements.fileSize,
    timeLeft: innerElements.timeLeft,
    uploadedPercentage: innerElements.uploadedPercentage,
    uploadingContent: innerElements.uploadingContent,
    replaceableContent: innerElements.replaceableContent,
    alertContent: innerElements.alertContent,
    closeIconButton: innerElements.closeIconButton,
    alert: innerElements.alert,
    fileSizeAlert: innerElements.alert,
  };
};
