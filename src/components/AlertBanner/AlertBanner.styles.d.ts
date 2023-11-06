import { AlertBannerIntent } from './types/AlertBannerIntent.type';
import { BaseProps } from '../../types/BaseProps';
import { IconName } from '../../utility-types/IconName';
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
        positive: {
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
export declare const resolveIconName: (intent: AlertBannerIntent) => IconName<20>;
