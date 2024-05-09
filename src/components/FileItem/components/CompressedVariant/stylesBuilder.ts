import {
  CompressedVariantConfig,
  defaultConfig,
} from './CompressedVariant.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type CompressedVariantStylesBuilder = {
  container: BaseProps;
  fileInfo: BaseProps;
  fileName: BaseProps;
  fileSize: BaseProps;
  content: BaseProps;
  uploadingContent: BaseProps;
  replaceableContent: BaseProps;
  alertContent: BaseProps;
  notExtendedAlert: BaseProps;
  closeIconButton: BaseProps;
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
    content: innerElements.content,
    uploadingContent: innerElements.uploadingContent,
    replaceableContent: innerElements.replaceableContent,
    alertContent: innerElements.alertContent,
    notExtendedAlert: innerElements.notExtendedAlert,
    closeIconButton: innerElements.closeIconButton,
  };
};
