import type { ToastEmphasis, ToastIntent } from './types';
import type { BaseProps } from '../../types/BaseProps';
import type { IconName } from '../../utility-types/IconName';
export type ToastConfig = {
    emphasis?: Partial<Record<ToastEmphasis, BaseProps>>;
    intent?: Partial<Record<ToastIntent, BaseProps>>;
    closeButton?: BaseProps;
    innerElements?: {
        iconContainer?: {
            intent: Partial<Record<ToastIntent, {
                emphasis: Partial<Record<ToastEmphasis, BaseProps>>;
            }>>;
        } & BaseProps;
        actionContainer?: BaseProps;
        middleDot?: {
            emphasis: Partial<Record<ToastEmphasis, BaseProps>>;
            intent: Partial<Record<ToastIntent, BaseProps>>;
        } & BaseProps;
        closeButton?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "inline-flex";
    alignItems: "center";
    h: string;
    padding: string;
    borderRadius: string;
    text: "$typo-body-medium";
    emphasis: {
        high: {};
        low: {
            backgroundColor: "$color-interaction-background-modeless";
            color: "$color-content-primary";
            ringColor: "$color-border-defaultA";
            ring: string;
            boxShadow: "$elevation-bottom-200";
        };
    };
    intent: {
        neutral: {
            backgroundColor: "$color-background-inverted";
            color: "$color-content-primary-inverted";
        };
        informative: {
            backgroundColor: "$color-background-informative-strong";
            color: "$color-content-primary-inverted";
            pl: string;
        };
        success: {
            backgroundColor: "$color-background-positive-strong";
            color: "$color-content-primary-inverted";
            pl: string;
        };
        warning: {
            backgroundColor: "$color-background-warning-strong";
            color: "$color-content-primary";
            pl: string;
        };
        negative: {
            backgroundColor: "$color-background-negative-strong";
            color: "$color-content-primary-inverted";
            pl: string;
        };
    };
    closeButton: {
        pr: string;
    };
    innerElements: {
        iconContainer: {
            intent: {
                neutral: {
                    emphasis: {
                        low: {};
                        high: {};
                    };
                };
                informative: {
                    emphasis: {
                        low: {
                            color: "$color-content-informative-secondary";
                        };
                        high: {
                            color: "$color-content-primary-inverted";
                        };
                    };
                };
                success: {
                    emphasis: {
                        low: {
                            color: "$color-content-positive-secondary";
                        };
                        high: {
                            color: "$color-content-primary-inverted";
                        };
                    };
                };
                warning: {
                    emphasis: {
                        low: {
                            color: "$color-content-warning-secondary";
                        };
                        high: {
                            color: "$color-content-primary";
                        };
                    };
                };
                negative: {
                    emphasis: {
                        low: {
                            color: "$color-content-negative-secondary";
                        };
                        high: {
                            color: "$color-content-primary-inverted";
                        };
                    };
                };
            };
            mr: string;
        };
        actionContainer: {
            display: "flex";
            alignItems: "center";
            justifyContent: "center";
            gap: string;
            ml: string;
        };
        middleDot: {
            emphasis: {
                high: {
                    color: "$color-content-secondary-inverted";
                };
                low: {
                    color: "$color-content-tertiary";
                };
            };
            intent: {
                neutral: {};
                informative: {};
                success: {};
                warning: {
                    color: "$color-content-secondary";
                };
                negative: {};
            };
        };
        closeButton: {
            ml: string;
        };
    };
};
export declare const resolveIconName: (intent: ToastIntent) => IconName<20> | null;
