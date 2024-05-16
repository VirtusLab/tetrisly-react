import { ExtendedVariantConfig } from './ExtendedVariant.styles';
import { FileItemThumbnail, FileItemCommonProps } from '../../types';

export type ExtendedVariantProps = FileItemCommonProps & {
  custom?: ExtendedVariantConfig;
  thumbnail?: FileItemThumbnail;
  timeLeftText?: string;
};
