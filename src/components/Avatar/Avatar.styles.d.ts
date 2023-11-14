import type { AvatarAppearance, AvatarShape } from './types';
import type { BaseProps } from '../../types/BaseProps';
import { Emphasis } from '../../types/Emphasis';
import { Size } from '../../types/Size';
export type AvatarConfig = {
    shape?: Partial<Record<AvatarShape, BaseProps>>;
    size?: Partial<Record<Size, BaseProps>>;
    appearance?: Partial<Record<AvatarAppearance, {
        emphasis?: Partial<Record<Emphasis, BaseProps>>;
    }>>;
    innerElements?: {
        image?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    overflow: "hidden";
    position: "relative";
    display: "flex";
    alignItems: "center";
    justifyContent: "center";
    shape: {
        rounded: {
            borderRadius: string;
        };
        square: {
            borderRadius: string;
        };
    };
    size: {
        large: {
            w: string;
            h: string;
            text: "$typo-body-large";
        };
        medium: {
            w: string;
            h: string;
            text: "$typo-body-medium";
        };
        small: {
            w: string;
            h: string;
            text: "$typo-body-small";
        };
        xSmall: {
            w: string;
            h: string;
            text: "$typo-body-strong-xSmall";
        };
        '2xSmall': {
            w: string;
            h: string;
            text: "$typo-body-strong-xSmall";
        };
    };
    appearance: {
        image: {
            emphasis: {
                high: {};
                low: {};
            };
        };
        blue: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-blue-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-blue-content-primary";
                    backgroundColor: "$color-nonSemantic-blue-background-muted";
                };
            };
        };
        green: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-green-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-green-content-primary";
                    backgroundColor: "$color-nonSemantic-green-background-muted";
                };
            };
        };
        grey: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-grey-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-grey-background-muted";
                };
            };
        };
        red: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-red-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-red-content-primary";
                    backgroundColor: "$color-nonSemantic-red-background-muted";
                };
            };
        };
        orange: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-grey-content-primary";
                    backgroundColor: "$color-nonSemantic-orange-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-orange-content-primary";
                    backgroundColor: "$color-nonSemantic-orange-background-muted";
                };
            };
        };
        raspberry: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-raspberry-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-raspberry-content-primary";
                    backgroundColor: "$color-nonSemantic-raspberry-background-muted";
                };
            };
        };
        magenta: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-magenta-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-magenta-content-primary";
                    backgroundColor: "$color-nonSemantic-magenta-background-muted";
                };
            };
        };
        purple: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-purple-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-purple-content-primary";
                    backgroundColor: "$color-nonSemantic-purple-background-muted";
                };
            };
        };
        grape: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-grape-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-grape-content-primary";
                    backgroundColor: "$color-nonSemantic-grape-background-muted";
                };
            };
        };
        violet: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-violet-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-violet-content-primary";
                    backgroundColor: "$color-nonSemantic-violet-background-muted";
                };
            };
        };
        cyan: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-cyan-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-cyan-content-primary";
                    backgroundColor: "$color-nonSemantic-cyan-background-muted";
                };
            };
        };
        teal: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-teal-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-teal-content-primary";
                    backgroundColor: "$color-nonSemantic-teal-background-muted";
                };
            };
        };
        aquamarine: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-aquamarine-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-aquamarine-content-primary";
                    backgroundColor: "$color-nonSemantic-aquamarine-background-muted";
                };
            };
        };
        emerald: {
            emphasis: {
                high: {
                    color: "$color-nonSemantic-white-content-primary";
                    backgroundColor: "$color-nonSemantic-emerald-background-strong";
                };
                low: {
                    color: "$color-nonSemantic-emerald-content-primary";
                    backgroundColor: "$color-nonSemantic-emerald-background-muted";
                };
            };
        };
    };
    innerElements: {
        image: {
            w: string;
            h: string;
        };
    };
};
