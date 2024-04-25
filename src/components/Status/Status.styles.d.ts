import type { StatusAppearance } from './StatusAppearance.type';
import { BaseProps } from '../../types';
export type StatusConfig = {
    appearance?: Partial<Record<StatusAppearance, {
        emphasis?: Partial<Record<'high' | 'medium' | 'low', BaseProps>>;
    }>>;
    dot: {
        appearance: Partial<Record<StatusAppearance, {
            emphasis?: Partial<Record<'high' | 'medium' | 'low', BaseProps>>;
        }>>;
    } & BaseProps<'appearance'>;
    hasLabel?: BaseProps;
    innerElements: {
        label?: BaseProps;
    };
} & BaseProps<'appearance'>;
export declare const defaultConfig: {
    display: "flex";
    w: string;
    h: string;
    gap: string;
    alignItems: "center";
    text: "$typo-body-medium";
    dot: {
        w: string;
        h: string;
        borderRadius: string;
        appearance: {
            grey: {
                emphasis: {
                    high: {
                        backgroundColor: "$color-nonSemantic-white-content-primary";
                    };
                    medium: {
                        backgroundColor: "$color-nonSemantic-grey-background-strong";
                    };
                    low: {
                        backgroundColor: "$color-nonSemantic-grey-background-strong";
                    };
                };
            };
            blue: {
                emphasis: {
                    high: {
                        backgroundColor: "$color-nonSemantic-white-content-primary";
                    };
                    medium: {
                        backgroundColor: "$color-nonSemantic-blue-background-strong";
                    };
                    low: {
                        backgroundColor: "$color-nonSemantic-blue-background-strong";
                    };
                };
            };
            green: {
                emphasis: {
                    high: {
                        backgroundColor: "$color-nonSemantic-white-content-primary";
                    };
                    medium: {
                        backgroundColor: "$color-nonSemantic-green-background-strong";
                    };
                    low: {
                        backgroundColor: "$color-nonSemantic-green-background-strong";
                    };
                };
            };
            red: {
                emphasis: {
                    high: {
                        backgroundColor: "$color-nonSemantic-white-content-primary";
                    };
                    medium: {
                        backgroundColor: "$color-nonSemantic-red-background-strong";
                    };
                    low: {
                        backgroundColor: "$color-nonSemantic-red-background-strong";
                    };
                };
            };
            orange: {
                emphasis: {
                    high: {
                        backgroundColor: "$color-nonSemantic-grey-content-primary";
                    };
                    medium: {
                        backgroundColor: "$color-nonSemantic-orange-background-strong";
                    };
                    low: {
                        backgroundColor: "$color-nonSemantic-orange-background-strong";
                    };
                };
            };
        };
    };
    appearance: {
        grey: {
            emphasis: {
                high: {
                    backgroundColor: "$color-nonSemantic-grey-background-strong";
                    color: "$color-nonSemantic-white-content-primary";
                    p: string;
                    borderRadius: string;
                };
                medium: {
                    backgroundColor: "$color-nonSemantic-grey-background-muted";
                    color: "$color-nonSemantic-grey-content-primary";
                    p: string;
                    borderRadius: string;
                };
                low: {
                    backgroundColor: "$color-transparent";
                    color: "$color-nonSemantic-grey-content-primary";
                    borderRadius: string;
                };
            };
        };
        blue: {
            emphasis: {
                high: {
                    backgroundColor: "$color-nonSemantic-blue-background-strong";
                    color: "$color-nonSemantic-white-content-primary";
                    p: string;
                    borderRadius: string;
                };
                medium: {
                    backgroundColor: "$color-nonSemantic-blue-background-muted";
                    color: "$color-nonSemantic-blue-content-primary";
                    p: string;
                    borderRadius: string;
                };
                low: {
                    backgroundColor: "$color-transparent";
                    color: "$color-nonSemantic-blue-content-primary";
                };
            };
        };
        green: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-green-background-strong";
                    p: string;
                    borderRadius: string;
                };
                medium: {
                    color: "$color-nonSemantic-green-content-primary";
                    backgroundColor: "$color-nonSemantic-green-background-muted";
                    p: string;
                    borderRadius: string;
                };
                low: {
                    color: "$color-nonSemantic-green-content-primary";
                };
            };
        };
        red: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-red-background-strong";
                    p: string;
                    borderRadius: string;
                };
                medium: {
                    color: "$color-nonSemantic-red-content-primary";
                    backgroundColor: "$color-nonSemantic-red-background-muted";
                    p: string;
                    borderRadius: string;
                };
                low: {
                    color: "$color-nonSemantic-red-content-primary";
                    backgroundColor: "$color-transparent";
                };
            };
        };
        orange: {
            emphasis: {
                high: {
                    backgroundColor: "$color-nonSemantic-orange-background-strong";
                    color: "$color-nonSemantic-grey-content-primary";
                    p: string;
                    borderRadius: string;
                };
                medium: {
                    color: "$color-nonSemantic-orange-content-primary";
                    backgroundColor: "$color-nonSemantic-orange-background-muted";
                    p: string;
                    borderRadius: string;
                };
                low: {
                    color: "$color-nonSemantic-orange-content-primary";
                    backgroundColor: "$color-transparent";
                };
            };
        };
    };
    innerElements: {
        label: {};
    };
};
export declare const statusStyles: {
    defaultConfig: {
        display: "flex";
        w: string;
        h: string;
        gap: string;
        alignItems: "center";
        text: "$typo-body-medium";
        dot: {
            w: string;
            h: string;
            borderRadius: string;
            appearance: {
                grey: {
                    emphasis: {
                        high: {
                            backgroundColor: "$color-nonSemantic-white-content-primary";
                        };
                        medium: {
                            backgroundColor: "$color-nonSemantic-grey-background-strong";
                        };
                        low: {
                            backgroundColor: "$color-nonSemantic-grey-background-strong";
                        };
                    };
                };
                blue: {
                    emphasis: {
                        high: {
                            backgroundColor: "$color-nonSemantic-white-content-primary";
                        };
                        medium: {
                            backgroundColor: "$color-nonSemantic-blue-background-strong";
                        };
                        low: {
                            backgroundColor: "$color-nonSemantic-blue-background-strong";
                        };
                    };
                };
                green: {
                    emphasis: {
                        high: {
                            backgroundColor: "$color-nonSemantic-white-content-primary";
                        };
                        medium: {
                            backgroundColor: "$color-nonSemantic-green-background-strong";
                        };
                        low: {
                            backgroundColor: "$color-nonSemantic-green-background-strong";
                        };
                    };
                };
                red: {
                    emphasis: {
                        high: {
                            backgroundColor: "$color-nonSemantic-white-content-primary";
                        };
                        medium: {
                            backgroundColor: "$color-nonSemantic-red-background-strong";
                        };
                        low: {
                            backgroundColor: "$color-nonSemantic-red-background-strong";
                        };
                    };
                };
                orange: {
                    emphasis: {
                        high: {
                            backgroundColor: "$color-nonSemantic-grey-content-primary";
                        };
                        medium: {
                            backgroundColor: "$color-nonSemantic-orange-background-strong";
                        };
                        low: {
                            backgroundColor: "$color-nonSemantic-orange-background-strong";
                        };
                    };
                };
            };
        };
        appearance: {
            grey: {
                emphasis: {
                    high: {
                        backgroundColor: "$color-nonSemantic-grey-background-strong";
                        color: "$color-nonSemantic-white-content-primary";
                        p: string;
                        borderRadius: string;
                    };
                    medium: {
                        backgroundColor: "$color-nonSemantic-grey-background-muted";
                        color: "$color-nonSemantic-grey-content-primary";
                        p: string;
                        borderRadius: string;
                    };
                    low: {
                        backgroundColor: "$color-transparent";
                        color: "$color-nonSemantic-grey-content-primary";
                        borderRadius: string;
                    };
                };
            };
            blue: {
                emphasis: {
                    high: {
                        backgroundColor: "$color-nonSemantic-blue-background-strong";
                        color: "$color-nonSemantic-white-content-primary";
                        p: string;
                        borderRadius: string;
                    };
                    medium: {
                        backgroundColor: "$color-nonSemantic-blue-background-muted";
                        color: "$color-nonSemantic-blue-content-primary";
                        p: string;
                        borderRadius: string;
                    };
                    low: {
                        backgroundColor: "$color-transparent";
                        color: "$color-nonSemantic-blue-content-primary";
                    };
                };
            };
            green: {
                emphasis: {
                    high: {
                        color: "$color-nonSemantic-white-content-primary";
                        backgroundColor: "$color-nonSemantic-green-background-strong";
                        p: string;
                        borderRadius: string;
                    };
                    medium: {
                        color: "$color-nonSemantic-green-content-primary";
                        backgroundColor: "$color-nonSemantic-green-background-muted";
                        p: string;
                        borderRadius: string;
                    };
                    low: {
                        color: "$color-nonSemantic-green-content-primary";
                    };
                };
            };
            red: {
                emphasis: {
                    high: {
                        color: "$color-nonSemantic-white-content-primary";
                        backgroundColor: "$color-nonSemantic-red-background-strong";
                        p: string;
                        borderRadius: string;
                    };
                    medium: {
                        color: "$color-nonSemantic-red-content-primary";
                        backgroundColor: "$color-nonSemantic-red-background-muted";
                        p: string;
                        borderRadius: string;
                    };
                    low: {
                        color: "$color-nonSemantic-red-content-primary";
                        backgroundColor: "$color-transparent";
                    };
                };
            };
            orange: {
                emphasis: {
                    high: {
                        backgroundColor: "$color-nonSemantic-orange-background-strong";
                        color: "$color-nonSemantic-grey-content-primary";
                        p: string;
                        borderRadius: string;
                    };
                    medium: {
                        color: "$color-nonSemantic-orange-content-primary";
                        backgroundColor: "$color-nonSemantic-orange-background-muted";
                        p: string;
                        borderRadius: string;
                    };
                    low: {
                        color: "$color-nonSemantic-orange-content-primary";
                        backgroundColor: "$color-transparent";
                    };
                };
            };
        };
        innerElements: {
            label: {};
        };
    };
};
