import {
  CompressedVariantConfig,
  defaultConfig,
} from './CompressedVariant.styles';
import { ProgressBarConfig } from '../ProgressBar';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type CompressedVariantStylesBuilder = {
  container: BaseProps;
  fileInfo: BaseProps;
  fileName: BaseProps;
  fileSize: BaseProps;
  alertIcon: BaseProps;
  content: BaseProps;
  uploadingContent: BaseProps;
  replaceableContent: BaseProps;
  alertContent: BaseProps;
  notExtendedAlert: BaseProps;
  closeIconButton: BaseProps;
  progressBar: ProgressBarConfig;
};

export const stylesBuilder = (
  custom?: CompressedVariantConfig,
): CompressedVariantStylesBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return {
    container,
    fileInfo: innerElements.fileInfo,
    fileName: innerElements.fileName,
    fileSize: innerElements.fileSize,
    alertIcon: innerElements.alertIcon,
    content: innerElements.content,
    uploadingContent: innerElements.uploadingContent,
    replaceableContent: innerElements.replaceableContent,
    alertContent: innerElements.alertContent,
    notExtendedAlert: innerElements.notExtendedAlert,
    closeIconButton: innerElements.closeIconButton,
    progressBar: innerElements.progressBar,
  };
};
