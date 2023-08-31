import type { ToastIntent } from './types';
import { ButtonProps } from '../Button';
import { BaseProps } from '../../types/BaseProps';
import { Emphasis } from '../../types/Emphasis';
export type ToastConfig = {
    emphasis: Record<Emphasis, BaseProps>;
    intent: Record<ToastIntent, BaseProps>;
    closeButton: BaseProps;
    innerElements: {
        iconContainer: {
            intent: Record<ToastIntent, {
                emphasis: Record<Emphasis, BaseProps>;
            }>;
        } & BaseProps;
        actionContainer: BaseProps;
        middleDot: {
            emphasis: Record<Emphasis, BaseProps | Partial<ButtonProps<'bare'>>>;
        } & BaseProps;
        closeButton: BaseProps;
    };
} & BaseProps;
export declare const config: {
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
