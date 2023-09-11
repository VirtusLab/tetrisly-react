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
            text: "body-large";
        };
        medium: {
            w: string;
            h: string;
            text: "body-medium";
        };
        small: {
            w: string;
            h: string;
            text: "body-small";
        };
        xSmall: {
            w: string;
            h: string;
            text: "body-strong-xSmall";
        };
        '2xSmall': {
            w: string;
            h: string;
            text: "body-strong-xSmall";
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
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-blue-background-strong";
                };
                low: {
                    color: "nonSemantic-blue-content-primary";
                    backgroundColor: "nonSemantic-blue-background-muted";
                };
            };
        };
        green: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-green-background-strong";
                };
                low: {
                    color: "nonSemantic-green-content-primary";
                    backgroundColor: "nonSemantic-green-background-muted";
                };
            };
        };
        grey: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted";
                };
            };
        };
        red: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-red-background-strong";
                };
                low: {
                    color: "nonSemantic-red-content-primary";
                    backgroundColor: "nonSemantic-red-background-muted";
                };
            };
        };
        orange: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-orange-background-muted";
                };
            };
        };
        raspberry: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-raspberry-background-strong";
                };
                low: {
                    color: "nonSemantic-raspberry-content-primary";
                    backgroundColor: "nonSemantic-raspberry-background-muted";
                };
            };
        };
        magenta: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-magenta-background-strong";
                };
                low: {
                    color: "nonSemantic-magenta-content-primary";
                    backgroundColor: "nonSemantic-magenta-background-muted";
                };
            };
        };
        purple: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-purple-background-strong";
                };
                low: {
                    color: "nonSemantic-purple-content-primary";
                    backgroundColor: "nonSemantic-purple-background-muted";
                };
            };
        };
        grape: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grape-background-strong";
                };
                low: {
                    color: "nonSemantic-grape-content-primary";
                    backgroundColor: "nonSemantic-grape-background-muted";
                };
            };
        };
        violet: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-violet-background-strong";
                };
                low: {
                    color: "nonSemantic-violet-content-primary";
                    backgroundColor: "nonSemantic-violet-background-muted";
                };
            };
        };
        cyan: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-cyan-background-strong";
                };
                low: {
                    color: "nonSemantic-cyan-content-primary";
                    backgroundColor: "nonSemantic-cyan-background-muted";
                };
            };
        };
        teal: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-teal-background-strong";
                };
                low: {
                    color: "nonSemantic-teal-content-primary";
                    backgroundColor: "nonSemantic-teal-background-muted";
                };
            };
        };
        aquamarine: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-aquamarine-background-strong";
                };
                low: {
                    color: "nonSemantic-aquamarine-content-primary";
                    backgroundColor: "nonSemantic-aquamarine-background-muted";
                };
            };
        };
        emerald: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-emerald-background-strong";
                };
                low: {
                    color: "nonSemantic-emerald-content-primary";
                    backgroundColor: "nonSemantic-emerald-background-muted";
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
