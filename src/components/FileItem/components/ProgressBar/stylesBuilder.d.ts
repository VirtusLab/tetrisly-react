import { ProgressBarConfig } from './ProgressBar.styles';
import { BaseProps } from '../../../../types/BaseProps';
type CornerDialogStylesBuilder = {
    container: BaseProps;
    track: BaseProps;
    progress: BaseProps;
};
export declare const stylesBuilder: (custom?: ProgressBarConfig, isInverted?: boolean) => CornerDialogStylesBuilder;
export {};
