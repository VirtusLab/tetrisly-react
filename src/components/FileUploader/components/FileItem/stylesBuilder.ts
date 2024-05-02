import {
  FileItemProps,
  stateFallback,
  thumbnailFallback,
} from './FileItem.props';
import { defaultConfig } from './FileItem.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type FileItemStylesBuilder = {
  container: BaseProps;
  fileName: BaseProps;
  fileSize: BaseProps;
  progressBar: BaseProps;
  progressBarTrack: BaseProps;
  progressBarSent: BaseProps;
};

export const stylesBuilder = (props: FileItemProps): FileItemStylesBuilder => {
  const {
    state,
    inverted,
    extended,
    thumbnail,
    invertedAlert,
    innerElements,
    ...container
  } = mergeConfigWithCustom({
    defaultConfig,
    custom: props.custom,
  });

  const withStateStyles = state[props.state ?? stateFallback];
  const withInvertedStyles = props.isInverted ? inverted.yes : inverted.no;
  const withExtendedStyles = props.isExtended ? extended.yes : extended.no;
  const withThumbnailStyles = thumbnail[props.thumbnail ?? thumbnailFallback];
  const withInvertedAlertStyles =
    props.state === 'alert' && props.isInverted ? invertedAlert : {};

  return {
    container: {
      ...container,
      ...withStateStyles,
      ...withInvertedStyles,
      ...withExtendedStyles,
      ...withThumbnailStyles,
      ...withInvertedAlertStyles,
    },
    fileName: innerElements.fileName,
    fileSize: innerElements.fileSize,
    progressBar: innerElements.progressBar,
    progressBarTrack: innerElements.progressBarTrack,
    progressBarSent: innerElements.progressBarSent,
  };
};
