import type { InlineBannerIntent } from './types';
import type { BaseProps } from '../../types';
import { IconName } from '../../utility-types/IconName';
export type InlineBannerConfig = {
    intent?: Partial<Record<InlineBannerIntent, BaseProps>>;
    innerElements?: {
        iconContainer?: {
            intent?: Partial<Record<InlineBannerIntent, BaseProps>>;
        } & BaseProps;
        contentContainer?: BaseProps;
        actionContainer?: BaseProps;
        description?: BaseProps;
        title?: {
            intent?: Partial<Record<InlineBannerIntent, BaseProps>>;
        } & BaseProps;
        closeButton?: BaseProps;
    };
    spacing?: {
        container?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    position: "relative";
    display: "flex";
    p: string;
    gap: string;
    borderRadius: string;
    ring: string;
    ringInset: true;
    intent: {
        none: {
            backgroundColor: "$color-background-neutral-subtle";
            ringColor: "$color-border-neutral-subtle";
        };
        informative: {
            backgroundColor: "$color-background-informative-subtle";
            ringColor: "$color-border-informative-subtle";
        };
        success: {
            backgroundColor: "$color-background-positive-subtle";
            ringColor: "$color-border-positive-subtle";
        };
        warning: {
            backgroundColor: "$color-background-warning-subtle";
            ringColor: "$color-border-warning-subtle";
        };
        negative: {
            backgroundColor: "$color-background-negative-subtle";
            ringColor: "$color-border-negative-subtle";
        };
    };
    innerElements: {
        iconContainer: {
            h: string;
            display: "flex";
            alignItems: "center";
            intent: {
                none: {
                    color: "$color-content-secondary";
                };
                informative: {
                    color: "$color-content-informative-secondary";
                };
                success: {
                    color: "$color-content-positive-secondary";
                };
                warning: {
                    color: "$color-content-warning-secondary";
                };
                negative: {
                    color: "$color-content-negative-secondary";
                };
            };
        };
        contentContainer: {
            display: "flex";
            flexDirection: "column";
            maxW: string;
        };
        actionContainer: {
            display: "flex";
            gap: string;
            mt: string;
        };
        description: {
            color: "$color-content-secondary";
            text: "$typo-body-medium";
        };
        title: {
            text: "$typo-body-strong-medium";
            mb: string;
            intent: {
                none: {
                    color: "$color-content-primary";
                };
                informative: {
                    color: "$color-content-informative-primary";
                };
                success: {
                    color: "$color-content-positive-primary";
                };
                warning: {
                    color: "$color-content-warning-primary";
                };
                negative: {
                    color: "$color-content-negative-primary";
                };
            };
        };
        closeButton: {
            position: "absolute";
            top: string;
            right: string;
        };
    };
    spacing: {
        container: {
            pr: string;
        };
    };
};
export declare const resolveIconName: (intent: InlineBannerIntent) => IconName<20>;
