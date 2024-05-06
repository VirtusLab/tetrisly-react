import { MouseEvent } from 'react';

import { FileItemConfig } from './FileItem.styles';
import { FileItemState, FileItemThumbnail } from './types';

export type FileItemProps = {
  custom?: FileItemConfig;
  file: File;
  state?: FileItemState;
  isInverted?: boolean;
  isExtended?: boolean;
  thumbnail?: 'none' | 'file' | 'photo';
  onReplaceClick?: (e?: MouseEvent) => void;
  onRetryClick?: (e?: MouseEvent) => void;
  onCloseClick?: (e?: MouseEvent) => void;
};

export const stateFallback: FileItemState = 'uploading';
export const thumbnailFallback: FileItemThumbnail = 'none';
