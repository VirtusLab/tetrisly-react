import { CompressedVariantConfig } from './CompressedVariant.styles';
import { FileItemCommonProps } from '../../types';
export type CompressedVariantProps = FileItemCommonProps & {
    custom?: CompressedVariantConfig;
};
