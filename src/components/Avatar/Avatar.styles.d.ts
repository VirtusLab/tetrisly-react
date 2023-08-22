import { AvatarShape } from './AvatarShape.type';
import { Appearance } from '../../types/Appearance';
import { Emphasis } from '../../types/Emphasis';
import { Size } from '../../types/Size';
import { BaseConfigProps } from '../../utility-types/BaseConfigProps';
export type AvatarConfig = {
    nestedImage: BaseConfigProps;
    shape: Record<AvatarShape, BaseConfigProps>;
    size: Record<Size, BaseConfigProps>;
    appearance: Record<Appearance | 'image', {
        emphasis: Record<Emphasis, BaseConfigProps>;
    }>;
} & BaseConfigProps;
export declare const config: {
    nestedImage: {
        w: string;
        h: string;
    };
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
    size: Record<"large" | "medium" | "small" | "xSmall" | "2xSmall", BaseConfigProps>;
    appearance: {
        blue: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        green: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        grey: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        red: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        orange: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        raspberry: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        magenta: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        purple: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        grape: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        violet: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        cyan: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        teal: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        aquamarine: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        emerald: {
            emphasis: {
                high: {
                    color: "nonSemantic-white-content-primary";
                    backgroundColor: "nonSemantic-grey-background-strong" | "nonSemantic-red-background-strong" | "nonSemantic-raspberry-background-strong" | "nonSemantic-magenta-background-strong" | "nonSemantic-purple-background-strong" | "nonSemantic-grape-background-strong" | "nonSemantic-violet-background-strong" | "nonSemantic-blue-background-strong" | "nonSemantic-cyan-background-strong" | "nonSemantic-teal-background-strong" | "nonSemantic-aquamarine-background-strong" | "nonSemantic-green-background-strong" | "nonSemantic-emerald-background-strong" | "nonSemantic-orange-background-strong";
                };
                low: {
                    color: "nonSemantic-grey-content-primary" | "nonSemantic-red-content-primary" | "nonSemantic-raspberry-content-primary" | "nonSemantic-magenta-content-primary" | "nonSemantic-purple-content-primary" | "nonSemantic-grape-content-primary" | "nonSemantic-violet-content-primary" | "nonSemantic-blue-content-primary" | "nonSemantic-cyan-content-primary" | "nonSemantic-teal-content-primary" | "nonSemantic-aquamarine-content-primary" | "nonSemantic-green-content-primary" | "nonSemantic-emerald-content-primary" | "nonSemantic-orange-content-primary";
                    backgroundColor: "nonSemantic-grey-background-muted" | "nonSemantic-red-background-muted" | "nonSemantic-raspberry-background-muted" | "nonSemantic-magenta-background-muted" | "nonSemantic-purple-background-muted" | "nonSemantic-grape-background-muted" | "nonSemantic-violet-background-muted" | "nonSemantic-blue-background-muted" | "nonSemantic-cyan-background-muted" | "nonSemantic-teal-background-muted" | "nonSemantic-aquamarine-background-muted" | "nonSemantic-green-background-muted" | "nonSemantic-emerald-background-muted" | "nonSemantic-orange-background-muted";
                };
            };
        };
        image: {
            emphasis: {
                high: {};
                low: {};
            };
        };
    };
};