import { CornerDialogConfig } from './CornerDialog.styles';
import { BaseProps } from '../../types/BaseProps';
type CornerDialogStylesBuilder = {
    container: BaseProps;
    intentIndicator: BaseProps;
    intentWarning: BaseProps;
    intentNegative: BaseProps;
    body: BaseProps;
    header: BaseProps;
    headerTitle: BaseProps;
    closeButton: BaseProps<'appearance'>;
    content: BaseProps;
    footer: BaseProps;
};
export declare const stylesBuilder: (custom?: CornerDialogConfig) => CornerDialogStylesBuilder;
export {};
