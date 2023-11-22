import { BadgeAppearance } from './BadgeAppearance.type';
import { BadgeIntent } from './BadgeIntent.type';
import { BaseProps } from '../../types/BaseProps';
export type BadgeConfig = {
    appearance?: Partial<Record<BadgeAppearance, {
        emphasis?: Partial<Record<'high' | 'medium' | 'low', BaseProps>>;
    }>>;
    intent?: Partial<Record<BadgeIntent, {
        emphasis?: Partial<Record<'high' | 'medium' | 'low', BaseProps>>;
    }>>;
    hasLabel?: BaseProps;
    innerElements?: {
        label?: BaseProps;
        iconContainer?: BaseProps;
    };
} & BaseProps<'appearance'>;
export declare const defaultConfig: {
    display: "flex";
    w: string;
    h: string;
    borderRadius: string;
    flexShrink: number;
    alignItems: "center";
    gap: string;
    p: string;
    hasLabel: {
        px: string;
    };
    text: "$typo-body-medium";
    appearance: {
        blue: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-blue-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-blue-content-primary";
                    backgroundColor: "$color-nonSemantic-blue-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-blue-background-onSubtle";
                };
            };
        };
        green: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-green-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-green-content-primary";
                    backgroundColor: "$color-nonSemantic-green-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-green-background-onSubtle";
                };
            };
        };
        grey: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-grey-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-grey-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-grey-background-onSubtle";
                };
            };
        };
        red: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-red-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-red-content-primary";
                    backgroundColor: "$color-nonSemantic-red-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-red-background-onSubtle";
                };
            };
        };
        orange: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-orange-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-orange-content-primary";
                    backgroundColor: "$color-nonSemantic-orange-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-orange-background-onSubtle";
                };
            };
        };
        raspberry: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-raspberry-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-raspberry-content-primary";
                    backgroundColor: "$color-nonSemantic-raspberry-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-raspberry-background-onSubtle";
                };
            };
        };
        magenta: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-magenta-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-magenta-content-primary";
                    backgroundColor: "$color-nonSemantic-magenta-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-magenta-background-onSubtle";
                };
            };
        };
        purple: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-purple-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-purple-content-primary";
                    backgroundColor: "$color-nonSemantic-purple-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-purple-background-onSubtle";
                };
            };
        };
        grape: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-grape-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-grape-content-primary";
                    backgroundColor: "$color-nonSemantic-grape-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-grape-background-onSubtle";
                };
            };
        };
        violet: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-violet-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-violet-content-primary";
                    backgroundColor: "$color-nonSemantic-violet-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-violet-background-onSubtle";
                };
            };
        };
        cyan: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-cyan-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-cyan-content-primary";
                    backgroundColor: "$color-nonSemantic-cyan-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-cyan-background-onSubtle";
                };
            };
        };
        teal: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-teal-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-teal-content-primary";
                    backgroundColor: "$color-nonSemantic-teal-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-teal-background-onSubtle";
                };
            };
        };
        aquamarine: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-aquamarine-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-aquamarine-content-primary";
                    backgroundColor: "$color-nonSemantic-aquamarine-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-aquamarine-background-onSubtle";
                };
            };
        };
        emerald: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-emerald-background-strong";
                };
                medium: {
                    color: "$color-nonSemantic-emerald-content-primary";
                    backgroundColor: "$color-nonSemantic-emerald-background-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-emerald-background-onSubtle";
                };
            };
        };
        outline: {
            emphasis: {
                high: {
                    border: string;
                    borderColor: "$color-nonSemantic-grey-border-strong";
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-white-background-strong";
                };
                medium: {
                    border: string;
                    borderColor: "$color-nonSemantic-grey-border-subtle";
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-white-background-strong";
                };
                low: {
                    border: string;
                    borderColor: "$color-nonSemantic-grey-border-strong";
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-white-background-strong";
                };
            };
        };
    };
    intent: {
        neutral: {
            emphasis: {
                high: {
                    color: "$color-content-primary-inverted";
                    backgroundColor: "$color-background-neutral-strong";
                };
                medium: {
                    color: "$color-content-primary";
                    backgroundColor: "$color-background-neutral-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-background-neutral-onSubtle";
                };
            };
        };
        informative: {
            emphasis: {
                high: {
                    color: "$color-content-primary-inverted";
                    backgroundColor: "$color-background-informative-strong";
                };
                medium: {
                    color: "$color-content-informative-primary";
                    backgroundColor: "$color-background-informative-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-background-informative-onSubtle";
                };
            };
        };
        positive: {
            emphasis: {
                high: {
                    color: "$color-content-primary-inverted";
                    backgroundColor: "$color-background-positive-strong";
                };
                medium: {
                    color: "$color-content-positive-primary";
                    backgroundColor: "$color-background-positive-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-background-positive-onSubtle";
                };
            };
        };
        warning: {
            emphasis: {
                high: {
                    color: "$color-content-primary";
                    backgroundColor: "$color-background-warning-strong";
                };
                medium: {
                    color: "$color-content-warning-primary";
                    backgroundColor: "$color-background-warning-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-background-warning-onSubtle";
                };
            };
        };
        negative: {
            emphasis: {
                high: {
                    color: "$color-content-primary-inverted";
                    backgroundColor: "$color-background-negative-strong";
                };
                medium: {
                    color: "$color-content-negative-primary";
                    backgroundColor: "$color-background-negative-muted";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-background-negative-onSubtle";
                };
            };
        };
    };
    innerElements: {
        label: {};
        iconContainer: {};
    };
};
