import { CompressedVariantConfig, ExtendedVariantConfig } from './components';
import { FileItemProps } from './FileItem.props';
import { BaseProps } from '../../types/BaseProps';
type FileItemStylesBuilder = {
    container: BaseProps;
    compressed: CompressedVariantConfig;
    extended: ExtendedVariantConfig;
};
export declare const stylesBuilder: (props: FileItemProps) => FileItemStylesBuilder;
export {};
