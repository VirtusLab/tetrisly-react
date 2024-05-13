import { MouseEvent } from 'react';

import { CompressedVariantConfig } from './CompressedVariant.styles';
import { FileItemState } from '../../types';

export type CompressedVariantProps = {
  custom?: CompressedVariantConfig;
  state: FileItemState;
  file: File;
  isInverted?: boolean;
  uploadedPercentage?: number;
  alertText?: string;
  onReplaceClick?: (e?: MouseEvent) => void;
  onRetryClick?: (e?: MouseEvent) => void;
  onCloseClick?: (e?: MouseEvent) => void;
};
