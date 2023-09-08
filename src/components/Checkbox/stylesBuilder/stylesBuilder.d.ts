import { SystemProps } from '@xstyled/styled-components';
import { CheckboxConfig } from '../Checkbox.styles';
import { BaseProps } from '../../../types/BaseProps';
type CheckboxStylesBuilder = {
    container: BaseProps;
    input: SystemProps;
    checkboxContainer: BaseProps;
    checkboxIcon: BaseProps;
    label: BaseProps;
    helperText: BaseProps;
};
export declare const stylesBuilder: (custom?: CheckboxConfig) => CheckboxStylesBuilder;
export {};
