import type { BaseProps } from '../../types/BaseProps';
export type LabelConfig = {
    innerElements?: {
        tooltip?: BaseProps;
        optional?: BaseProps;
        action?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    text: "medium-175";
    color: "content-primary";
    display: "flex";
    alignItems: "flex-start";
    gap: string;
    innerElements: {
        tooltip: {
            color: "content-secondary";
            display: "flex";
            alignItems: "center";
            minHeight: string;
        };
        optional: {
            color: "content-tertiary";
        };
        action: {
            ml: string;
        };
    };
};
