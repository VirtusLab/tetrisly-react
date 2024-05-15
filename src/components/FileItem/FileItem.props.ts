import { FileItemConfig } from './FileItem.styles';
import { FileItemState, FileItemThumbnail, FileItemCommonProps } from './types';

export type FileItemProps = FileItemCommonProps & {
  custom?: FileItemConfig;
  isExtended?: boolean;
  thumbnail?: FileItemThumbnail;
  timeLeftText?: string;
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
