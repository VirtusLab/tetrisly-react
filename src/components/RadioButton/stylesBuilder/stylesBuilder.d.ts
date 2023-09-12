import type { RadioButtonProps } from '../RadioButton.props';
import type { BaseProps } from '../../../types/BaseProps';
type RadioButtonStylesBuilder = {
    container: BaseProps;
    radioButton: BaseProps;
    label: BaseProps;
    helperText: BaseProps;
};
export declare const stylesBuilder: (custom: RadioButtonProps['custom']) => RadioButtonStylesBuilder;
export {};
