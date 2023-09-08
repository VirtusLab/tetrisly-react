import { CheckboxGroupConfig } from '../CheckboxGroup.style';
import { HelperTextConfig } from '../../../components/HelperText/HelperText.styles';
import { LabelConfig } from '../../../components/Label/Label.styles';
import { BaseProps } from '../../../types/BaseProps';
type CheckboxGroupStylesBuilder = {
    container: BaseProps;
    checkboxContainer: BaseProps;
    label: LabelConfig;
    helperText: HelperTextConfig;
};
export declare const stylesBuilder: (custom?: CheckboxGroupConfig) => CheckboxGroupStylesBuilder;
export {};
