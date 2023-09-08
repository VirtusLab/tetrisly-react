import { SystemProps } from '@xstyled/styled-components';
import { HelperTextConfig } from '../HelperText/HelperText.styles';
import { LabelConfig } from '../Label/Label.styles';
import { BaseProps } from '../../types/BaseProps';
export type CheckboxGroupConfig = {
    innerElements?: {
        checkboxContainer?: SystemProps;
        label?: LabelConfig;
        helperText?: HelperTextConfig;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "flex";
    flexDirection: "column";
    gap: string;
    innerElements: {
        checkboxContainer: {
            display: "grid";
            gap: string;
        };
        label: {};
        helperText: {};
    };
};
