import { HelperTextIntent } from './HelperTextIntent.type';
import { BaseProps } from '../../types/BaseProps';
import { IconName } from '../../utility-types/IconName';
export type HelperTextConfig = {
    intent?: Partial<Record<HelperTextIntent, BaseProps>>;
    innerElements?: {
        iconContainer?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "flex";
    alignItems: "flex-start";
    gap: string;
    text: "$typo-body-small";
    intent: {
        none: {
            color: "$color-content-secondary";
        };
        alert: {
            color: "$color-content-negative-secondary";
        };
        success: {
            color: "$color-content-positive-secondary";
        };
    };
    innerElements: {
        iconContainer: {
            display: "flex";
            alignItems: "center";
            minHeight: string;
        };
    };
};
export declare const resolveIconName: (intent: HelperTextIntent) => IconName<16>;
export declare const helperTextStyles: {
    defaultConfig: {
        display: "flex";
        alignItems: "flex-start";
        gap: string;
        text: "$typo-body-small";
        intent: {
            none: {
                color: "$color-content-secondary";
            };
            alert: {
                color: "$color-content-negative-secondary";
            };
            success: {
                color: "$color-content-positive-secondary";
            };
        };
        innerElements: {
            iconContainer: {
                display: "flex";
                alignItems: "center";
                minHeight: string;
            };
        };
    };
};
