import { CompressedVariantConfig } from './CompressedVariant.styles';
import { ProgressBarConfig } from '../ProgressBar';
import { BaseProps } from '../../../../types/BaseProps';
type CompressedVariantStylesBuilder = {
    container: BaseProps;
    fileInfo: BaseProps;
    fileName: BaseProps;
    fileSize: BaseProps;
    alertIcon: BaseProps;
    content: BaseProps;
    uploadingContent: BaseProps;
    replaceableContent: BaseProps;
    alertContent: BaseProps;
    notExtendedAlert: BaseProps;
    closeIconButton: BaseProps;
    progressBar: ProgressBarConfig;
};
export declare const stylesBuilder: (custom?: CompressedVariantConfig) => CompressedVariantStylesBuilder;
export {};
