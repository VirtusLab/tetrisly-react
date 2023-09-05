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
    text: "body-medium";
    intent: {
        none: {
            backgroundColor: "background-neutral-strong";
            color: "content-primary-inverted";
        };
        positive: {
            backgroundColor: "background-positive-strong";
            color: "content-primary-inverted";
        };
        warning: {
            backgroundColor: "background-warning-strong";
            color: "content-primary";
        };
        negative: {
            backgroundColor: "background-negative-strong";
            color: "content-primary-inverted";
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
            marginLeft: string;
        };
    };
};
export declare const resolveIconName: (intent: AlertBannerIntent) => IconName<20>;
