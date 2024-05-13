import { ProgressBarConfig, defaultConfig } from './ProgressBar.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type CornerDialogStylesBuilder = {
  container: BaseProps;
  track: BaseProps;
  progress: BaseProps;
};

export const stylesBuilder = (
  custom?: ProgressBarConfig,
  isInverted?: boolean,
): CornerDialogStylesBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  const withInvertedStyles = isInverted
    ? innerElements.invertedTrack
    : innerElements.notInvertedTrack;

  return {
    container,
    track: {
      ...innerElements.track,
      ...withInvertedStyles,
    },
    progress: innerElements.progress,
  };
};
