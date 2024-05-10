import type { RadioButtonGroupProps } from './RadioButtonGroup.props';
import type { BaseProps } from '../../types/BaseProps';
type RadioButtonGroupStylesBuilder = {
    container: BaseProps;
    radioButtonContainer: BaseProps;
    label: BaseProps;
    helperText: BaseProps;
};
export declare const stylesBuilder: (custom: RadioButtonGroupProps['custom']) => RadioButtonGroupStylesBuilder;
export {};
