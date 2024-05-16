import { ExtendedVariantConfig, defaultConfig } from './ExtendedVariant.styles';
import { ProgressBarConfig } from '../ProgressBar';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type ExtendedVariantStylesBuilder = {
  container: BaseProps;
  thumbnailWrapper: BaseProps;
  fileDetails: BaseProps;
  topDetails: BaseProps;
  bottomDetails: BaseProps;
  fileThumbnail: BaseProps;
  photoThumbnail: BaseProps;
  fileDescription: BaseProps;
  fileName: BaseProps;
  fileSize: BaseProps;
  timeLeft: BaseProps;
  dot: BaseProps;
  uploadedPercentage: BaseProps;
  uploadingContent: BaseProps;
  replaceableContent: BaseProps;
  alertContent: BaseProps;
  closeIconButton: BaseProps;
  alert: BaseProps;
  alertText: BaseProps;
  alertIcon: BaseProps;
  fileSizeAlert: BaseProps;
  progressBar: ProgressBarConfig;
};

export const stylesBuilder = (
  custom?: ExtendedVariantConfig,
): ExtendedVariantStylesBuilder => {
  const {
    innerElements,
    thumbnailWrapper,
    fileDetails,
    topDetails,
    bottomDetails,
    ...container
  } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return {
    container,
    thumbnailWrapper,
    fileDetails,
    topDetails,
    bottomDetails,
    fileThumbnail: innerElements.fileThumbnail,
    photoThumbnail: innerElements.photoThumbnail,
    fileDescription: innerElements.fileDescription,
    fileName: innerElements.fileName,
    fileSize: innerElements.fileSize,
    timeLeft: innerElements.timeLeft,
    dot: innerElements.dot,
    uploadedPercentage: innerElements.uploadedPercentage,
    uploadingContent: innerElements.uploadingContent,
    replaceableContent: innerElements.replaceableContent,
    alertContent: innerElements.alertContent,
    closeIconButton: innerElements.closeIconButton,
    alert: innerElements.alert,
    alertText: innerElements.alertText,
    alertIcon: innerElements.alertIcon,
    fileSizeAlert: innerElements.fileSizeAlert,
    progressBar: innerElements.progressBar,
  };
};
