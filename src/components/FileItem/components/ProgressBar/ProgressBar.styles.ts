import type { BaseProps } from '@/types/BaseProps';

export type ProgressBarConfig = BaseProps & {
  innerElements?: {
    track?: BaseProps;
    notInvertedTrack?: BaseProps;
    invertedTrack?: BaseProps;
    progress?: BaseProps;
  };
};

export const defaultConfig = {
  innerElements: {
    track: {
      h: '4px',
      borderRadius: '$border-radius-small',
    },
    notInvertedTrack: {
      backgroundColor: '$color-interaction-inverted-normal',
    },
    invertedTrack: {
      backgroundColor: '$color-interaction-neutral-subtle-normal',
    },
    progress: {
      h: '100%',
      borderRadius: '$border-radius-small',
      backgroundColor: '$color-interaction-default-normal',
    },
  },
} as const satisfies ProgressBarConfig;

export const progressBarStyles = {
  defaultConfig,
};
