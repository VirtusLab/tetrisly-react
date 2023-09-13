import type { ToastEmphasis, ToastIntent } from './types';
import type { ButtonProps } from '../Button';
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
            emphasis: Partial<Record<ToastEmphasis, BaseProps | Partial<ButtonProps<'bare'>>>>;
        } & BaseProps;
        closeButton?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "inline-flex";
    alignItems: "center";
    p: string;
    padding: string;
    borderRadius: string;
    emphasis: {
        high: {};
        low: {
            backgroundColor: "interaction-background-modeless";
            color: "content-primary";
            ringColor: "border-defaultA";
            ring: string;
            boxShadow: "bottom-200";
        };
    };
    intent: {
        neutral: {
            backgroundColor: "background-inverted";
            color: "content-primary-inverted";
        };
        informative: {
            backgroundColor: "background-informative-strong";
            color: "content-primary-inverted";
            pl: string;
        };
        success: {
            backgroundColor: "background-positive-strong";
            color: "content-primary-inverted";
            pl: string;
        };
        warning: {
            backgroundColor: "background-warning-strong";
            color: "content-primary";
            pl: string;
        };
        negative: {
            backgroundColor: "background-negative-strong";
            color: "content-primary-inverted";
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
                            color: "content-informative-secondary";
                        };
                        high: {
                            color: "content-primary-inverted";
                        };
                    };
                };
                success: {
                    emphasis: {
                        low: {
                            color: "content-positive-secondary";
                        };
                        high: {
                            color: "content-primary-inverted";
                        };
                    };
                };
                warning: {
                    emphasis: {
                        low: {
                            color: "content-warning-secondary";
                        };
                        high: {
                            color: "content-primary";
                        };
                    };
                };
                negative: {
                    emphasis: {
                        low: {
                            color: "content-negative-secondary";
                        };
                        high: {
                            color: "content-primary-inverted";
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
                    color: "content-secondary-inverted";
                };
                low: {
                    color: "content-tertiary";
                };
            };
            text: "body-medium";
        };
        closeButton: {
            ml: string;
        };
    };
};
export declare const resolveIconName: (intent: ToastIntent) => IconName<20> | null;
