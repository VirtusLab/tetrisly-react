import { PopoverAlign, PopoverOrigin } from './types';
import { BaseProps } from '../../types/BaseProps';
export type PopoverConfig = {
    origin?: Partial<Record<PopoverOrigin, {
        align: Partial<Record<PopoverAlign, BaseProps>>;
    }>>;
    innerElements?: {
        content?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    position: "relative";
    display: "inline-flex";
    origin: {
        top: {
            align: {
                start: {
                    transform: string;
                    left: string;
                };
                center: {
                    transform: string;
                    left: string;
                };
                end: {
                    transform: string;
                    left: string;
                };
            };
        };
        bottom: {
            align: {
                start: {
                    transform: string;
                    left: string;
                };
                center: {
                    transform: string;
                    left: string;
                };
                end: {
                    transform: string;
                    left: string;
                };
            };
        };
        left: {
            align: {
                start: {
                    transform: string;
                    top: string;
                };
                center: {
                    transform: string;
                    top: string;
                };
                end: {
                    transform: string;
                    top: string;
                };
            };
        };
        right: {
            align: {
                start: {
                    transform: string;
                    top: string;
                };
                center: {
                    transform: string;
                    top: string;
                };
                end: {
                    transform: string;
                    top: string;
                };
            };
        };
    };
    innerElements: {
        content: {
            position: "absolute";
            text: "$typo-body-medium";
            color: "$color-content-secondary";
            padding: string;
            ring: string;
            ringColor: "$color-border-defaultA";
            boxShadow: "$elevation-bottom-300";
            backgroundColor: "$color-interaction-background-modeless";
            borderRadius: string;
            zIndex: number;
            transition: boolean;
            transitionDuration: number;
        };
    };
};
export declare const popoverStyles: {
    defaultConfig: {
        position: "relative";
        display: "inline-flex";
        origin: {
            top: {
                align: {
                    start: {
                        transform: string;
                        left: string;
                    };
                    center: {
                        transform: string;
                        left: string;
                    };
                    end: {
                        transform: string;
                        left: string;
                    };
                };
            };
            bottom: {
                align: {
                    start: {
                        transform: string;
                        left: string;
                    };
                    center: {
                        transform: string;
                        left: string;
                    };
                    end: {
                        transform: string;
                        left: string;
                    };
                };
            };
            left: {
                align: {
                    start: {
                        transform: string;
                        top: string;
                    };
                    center: {
                        transform: string;
                        top: string;
                    };
                    end: {
                        transform: string;
                        top: string;
                    };
                };
            };
            right: {
                align: {
                    start: {
                        transform: string;
                        top: string;
                    };
                    center: {
                        transform: string;
                        top: string;
                    };
                    end: {
                        transform: string;
                        top: string;
                    };
                };
            };
        };
        innerElements: {
            content: {
                position: "absolute";
                text: "$typo-body-medium";
                color: "$color-content-secondary";
                padding: string;
                ring: string;
                ringColor: "$color-border-defaultA";
                boxShadow: "$elevation-bottom-300";
                backgroundColor: "$color-interaction-background-modeless";
                borderRadius: string;
                zIndex: number;
                transition: boolean;
                transitionDuration: number;
            };
        };
    };
};
