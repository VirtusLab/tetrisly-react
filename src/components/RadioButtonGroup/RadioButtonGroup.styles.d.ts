import type { HelperTextConfig } from '../HelperText/HelperText.styles';
import type { LabelConfig } from '../Label/Label.styles';
import type { BaseProps } from '../../types/BaseProps';
export type RadioButtonGroupConfig = {
    innerElements?: {
        radioButtonContainer?: BaseProps;
        label?: LabelConfig;
        helperText?: HelperTextConfig;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "flex";
    flexDirection: "column";
    gap: string;
    innerElements: {
        radioButtonContainer: {
            display: "grid";
            gap: string;
        };
        label: {};
        helperText: {};
    };
};
