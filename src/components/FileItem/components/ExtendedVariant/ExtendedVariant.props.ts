import { MouseEvent } from 'react';

import { ExtendedVariantConfig } from './ExtendedVariant.styles';
import { FileItemState, FileItemThumbnail } from '../../types';

export type ExtendedVariantProps = {
  custom?: ExtendedVariantConfig;
  state: FileItemState;
  file: File;
  isInverted?: boolean;
  thumbnail: FileItemThumbnail;
  uploadedPercentage?: number;
  timeLeftText?: string;
  alertText?: string;
  onReplaceClick?: (e?: MouseEvent) => void;
  onRetryClick?: (e?: MouseEvent) => void;
  onCloseClick?: (e?: MouseEvent) => void;
};
