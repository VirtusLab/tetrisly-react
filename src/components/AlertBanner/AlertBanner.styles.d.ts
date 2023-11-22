import { AlertBannerIntent } from './types/AlertBannerIntent.type';
import { BaseProps } from '../../types/BaseProps';
export type AlertBannerConfig = {
    intent?: Partial<Record<AlertBannerIntent, BaseProps>>;
    innerElements?: {
        iconContainer?: BaseProps;
        actionContainer?: BaseProps;
        closeButton?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    p: string;
    pl: string;
    display: "flex";
    alignItems: "center";
    text: "$typo-body-medium";
    intent: {
        none: {
            backgroundColor: "$color-background-neutral-strong";
            color: "$color-content-primary-inverted";
        };
        success: {
            backgroundColor: "$color-background-positive-strong";
            color: "$color-content-primary-inverted";
        };
        warning: {
            backgroundColor: "$color-background-warning-strong";
            color: "$color-content-primary";
        };
        negative: {
            backgroundColor: "$color-background-negative-strong";
            color: "$color-content-primary-inverted";
        };
    };
    innerElements: {
        iconContainer: {
            mr: string;
        };
        actionContainer: {
            display: "flex";
            alignItems: "center";
            justifyContent: "center";
            gap: string;
            ml: string;
        };
        closeButton: {
            ml: string;
        };
    };
};
export declare const resolveIconName: (intent: AlertBannerIntent) => "20-alert-fill" | "20-check-circle-fill" | "20-info-fill" | "20-warning-fill";
export declare const alertBannerStyles: {
    defaultConfig: {
        p: string;
        pl: string;
        display: "flex";
        alignItems: "center";
        text: "$typo-body-medium";
        intent: {
            none: {
                backgroundColor: "$color-background-neutral-strong";
                color: "$color-content-primary-inverted";
            };
            success: {
                backgroundColor: "$color-background-positive-strong";
                color: "$color-content-primary-inverted";
            };
            warning: {
                backgroundColor: "$color-background-warning-strong";
                color: "$color-content-primary";
            };
            negative: {
                backgroundColor: "$color-background-negative-strong";
                color: "$color-content-primary-inverted";
            };
        };
        innerElements: {
            iconContainer: {
                mr: string;
            };
            actionContainer: {
                display: "flex";
                alignItems: "center";
                justifyContent: "center";
                gap: string;
                ml: string;
            };
            closeButton: {
                ml: string;
            };
        };
    };
};
