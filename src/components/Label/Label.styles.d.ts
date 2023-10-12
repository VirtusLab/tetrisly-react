import type { BaseProps } from '../../types/BaseProps';
export type LabelConfig = {
    innerElements?: {
        tooltip?: BaseProps;
        optional?: BaseProps;
        action?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    text: "$typo-body-medium";
    color: "$color-content-primary";
    display: "flex";
    alignItems: "flex-start";
    gap: string;
    innerElements: {
        tooltip: {
            color: "$color-content-secondary";
            display: "flex";
            alignItems: "center";
            minHeight: string;
        };
        optional: {
            color: "$color-content-tertiary";
        };
        action: {
            ml: string;
        };
    };
};
