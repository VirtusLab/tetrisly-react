import { MouseEvent } from 'react';

import { FileItemConfig } from './FileItem.styles';
import { FileItemState, FileItemThumbnail } from './types';

export type FileItemProps = {
  custom?: FileItemConfig;
  file: File;
  state?: FileItemState;
  isInverted?: boolean;
  isExtended?: boolean;
  thumbnail?: FileItemThumbnail;
  uploadedPercentage?: number;
  timeLeftText?: string;
  alertText?: string;
  onReplaceClick?: (e?: MouseEvent) => void;
  onRetryClick?: (e?: MouseEvent) => void;
  onCloseClick?: (e?: MouseEvent) => void;
};

export type Fallback = {
  state: FileItemState;
  isInverted: boolean;
  isExtended: boolean;
  thumbnail: FileItemThumbnail;
};

export const fallback: Fallback = {
  state: 'uploading',
  isInverted: false,
  isExtended: false,
  thumbnail: 'none',
};
