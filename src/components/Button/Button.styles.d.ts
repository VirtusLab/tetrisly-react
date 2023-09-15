import { BaseProps } from '../../types/BaseProps';
export type DefaultButtonConfig = {
    appearance?: {
        primary?: {
            intent?: {
                none?: BaseProps;
                success?: BaseProps;
                destructive?: BaseProps;
            };
        } & BaseProps;
        secondary?: {
            intent?: {
                none?: BaseProps;
                success?: BaseProps;
                destructive?: BaseProps;
            };
        } & BaseProps;
        inverted?: {
            intent?: {
                none?: BaseProps;
            };
        } & BaseProps;
    };
    size?: {
        small?: {
            hasDropdownIndicator?: BaseProps;
            hasBeforeIcon?: BaseProps;
            hasAfterIcon?: BaseProps;
        } & BaseProps;
        medium?: {
            hasDropdownIndicator?: BaseProps;
            hasBeforeIcon?: BaseProps;
            hasAfterIcon?: BaseProps;
        } & BaseProps;
        large?: {
            hasDropdownIndicator?: BaseProps;
            hasBeforeIcon?: BaseProps;
            hasAfterIcon?: BaseProps;
        } & BaseProps;
    };
} & BaseProps;
export type GhostButtonConfig = {
    appearance?: {
        primary?: {
            intent?: {
                none?: BaseProps;
                success?: BaseProps;
                destructive?: BaseProps;
            };
        } & BaseProps;
        secondary?: {
            intent?: {
                none?: BaseProps;
            };
        } & BaseProps;
        inverted?: {
            intent?: {
                none?: BaseProps;
            };
        } & BaseProps;
        reverseInverted?: {
            intent?: {
                none?: BaseProps;
            };
        } & BaseProps;
    };
    size?: {
        small?: {
            hasDropdownIndicator?: BaseProps;
            hasBeforeIcon?: BaseProps;
            hasAfterIcon?: BaseProps;
        } & BaseProps;
        medium?: {
            hasDropdownIndicator?: BaseProps;
            hasBeforeIcon?: BaseProps;
            hasAfterIcon?: BaseProps;
        } & BaseProps;
        large?: {
            hasDropdownIndicator?: BaseProps;
            hasBeforeIcon?: BaseProps;
            hasAfterIcon?: BaseProps;
        } & BaseProps;
    };
} & BaseProps;
export type BareButtonConfig = {
    appearance?: {
        primary?: {
            intent?: {
                none?: BaseProps;
                success?: BaseProps;
                destructive?: BaseProps;
            };
        } & BaseProps;
        secondary?: {
            intent?: {
                none?: BaseProps;
            };
        } & BaseProps;
        inverted?: {
            intent?: {
                none?: BaseProps;
            };
        } & BaseProps;
        reverseInverted?: {
            intent?: {
                none?: BaseProps;
            };
        } & BaseProps;
    };
    size?: {
        medium?: {
            hasDropdownIndicator?: BaseProps;
            hasBeforeIcon?: BaseProps;
            hasAfterIcon?: BaseProps;
        } & BaseProps;
        large?: {
            hasDropdownIndicator?: BaseProps;
            hasBeforeIcon?: BaseProps;
            hasAfterIcon?: BaseProps;
        } & BaseProps;
    };
} & BaseProps;
export type ButtonConfig = {
    default?: DefaultButtonConfig;
    ghost?: GhostButtonConfig;
    bare?: BareButtonConfig;
};
export declare const defaultConfig: {
    default: {
        borderRadius: string;
        boxShadow: "bottom-100";
        appearance: {
            primary: {
                color: "action-inverted-normal";
                intent: {
                    none: {
                        backgroundColor: {
                            _: "action-primary-normal";
                            hover: "action-primary-hover";
                            active: "action-primary-active";
                            selected: "action-primary-selected";
                        };
                    };
                    success: {
                        backgroundColor: {
                            _: "action-success-normal";
                            hover: "action-success-hover";
                            active: "action-success-active";
                            selected: "action-success-selected";
                        };
                    };
                    destructive: {
                        backgroundColor: {
                            _: "action-destructive-normal";
                            hover: "action-destructive-hover";
                            active: "action-destructive-active";
                            selected: "action-destructive-selected";
                        };
                    };
                };
            };
            secondary: {
                backgroundColor: "action-inverted-normal";
                ringInset: true;
                ring: string;
                ringColor: {
                    _: "action-outline-normal";
                    hover: "action-outline-hover";
                    active: "action-outline-active";
                    selected: "action-outline-selected";
                };
                intent: {
                    none: {
                        color: {
                            _: "action-neutral-normal";
                            hover: "action-neutral-hover";
                            active: "action-neutral-active";
                            selected: "action-neutral-selected";
                        };
                    };
                    success: {
                        color: {
                            _: "action-success-normal";
                            hover: "action-success-hover";
                            active: "action-success-active";
                            selected: "action-success-selected";
                        };
                    };
                    destructive: {
                        color: {
                            _: "action-destructive-normal";
                            hover: "action-destructive-hover";
                            active: "action-destructive-active";
                            selected: "action-destructive-selected";
                        };
                    };
                };
            };
            inverted: {
                intent: {
                    none: {
                        backgroundColor: {
                            _: "action-inverted-normal";
                            hover: "action-inverted-hover";
                            active: "action-inverted-active";
                            selected: "action-inverted-selected";
                        };
                        color: {
                            _: "action-neutral-normal";
                            hover: "action-neutral-hover";
                            active: "action-neutral-active";
                            selected: "action-neutral-selected";
                        };
                    };
                };
            };
        };
        size: {
            readonly small: {
                readonly px: "component-padding-medium";
                readonly h: "small";
                readonly text: "body-medium";
                readonly hasDropdownIndicator: {
                    readonly pr: "component-padding-small";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "component-padding-small";
                };
                readonly hasAfterIcon: {
                    readonly pr: "component-padding-small";
                };
            };
            readonly medium: {
                readonly px: "component-padding-large";
                readonly h: "medium";
                readonly text: "body-medium";
                readonly hasDropdownIndicator: {
                    readonly pr: "component-padding-medium";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "component-padding-medium";
                };
                readonly hasAfterIcon: {
                    readonly pr: "component-padding-medium";
                };
            };
            readonly large: {
                readonly px: "component-padding-large";
                readonly h: "large";
                readonly text: "body-large";
                readonly hasDropdownIndicator: {
                    readonly pr: "component-padding-medium";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "component-padding-medium";
                };
                readonly hasAfterIcon: {
                    readonly pr: "component-padding-medium";
                };
            };
        };
        display: "inline-flex";
        gap: string;
        justifyContent: "center";
        alignItems: "center";
        textAlign: "center";
        whiteSpace: "nowrap";
        opacity: {
            disabled: "disabled";
        };
        outline: {
            focus: string;
        };
        outlineColor: {
            focus: "interaction-focus-default";
        };
        outlineWidth: {
            focus: string;
        };
        outlineOffset: number;
        pointerEvents: {
            loading: "none";
            disabled: "none";
        };
        transition: boolean;
        transitionDuration: number;
    };
    ghost: {
        borderRadius: string;
        backgroundColor: {
            _: "transparent";
            hover: "action-ghost-hover";
            active: "action-ghost-active";
            selected: "action-ghost-selected";
        };
        appearance: {
            primary: {
                intent: {
                    none: {
                        color: {
                            _: "action-primary-normal";
                            hover: "action-primary-hover";
                            active: "action-primary-active";
                            selected: "action-primary-selected";
                        };
                    };
                    success: {
                        color: {
                            _: "action-success-normal";
                            hover: "action-success-hover";
                            active: "action-success-active";
                            selected: "action-success-selected";
                        };
                    };
                    destructive: {
                        color: {
                            _: "action-destructive-normal";
                            hover: "action-destructive-hover";
                            active: "action-destructive-active";
                            selected: "action-destructive-selected";
                        };
                    };
                };
            };
            secondary: {
                intent: {
                    none: {
                        color: {
                            _: "action-neutral-normal";
                            hover: "action-neutral-hover";
                            active: "action-neutral-active";
                            selected: "action-neutral-selected";
                        };
                    };
                };
            };
            inverted: {
                intent: {
                    none: {
                        backgroundColor: {
                            _: "action-ghost-normal";
                            hover: "action-ghost-inverted-hover";
                            active: "action-ghost-inverted-active";
                            selected: "action-ghost-inverted-selected";
                        };
                        color: {
                            _: "action-inverted-normal";
                            hover: "action-inverted-hover";
                            active: "action-inverted-active";
                            selected: "action-inverted-selected";
                        };
                    };
                };
            };
            reverseInverted: {
                intent: {
                    none: {
                        color: {
                            _: "action-reverseInverted-normal";
                            hover: "action-reverseInverted-hover";
                            active: "action-reverseInverted-active";
                            selected: "action-reverseInverted-selected";
                        };
                    };
                };
            };
        };
        size: {
            readonly small: {
                readonly px: "component-padding-medium";
                readonly h: "small";
                readonly text: "body-medium";
                readonly hasDropdownIndicator: {
                    readonly pr: "component-padding-small";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "component-padding-small";
                };
                readonly hasAfterIcon: {
                    readonly pr: "component-padding-small";
                };
            };
            readonly medium: {
                readonly px: "component-padding-large";
                readonly h: "medium";
                readonly text: "body-medium";
                readonly hasDropdownIndicator: {
                    readonly pr: "component-padding-medium";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "component-padding-medium";
                };
                readonly hasAfterIcon: {
                    readonly pr: "component-padding-medium";
                };
            };
            readonly large: {
                readonly px: "component-padding-large";
                readonly h: "large";
                readonly text: "body-large";
                readonly hasDropdownIndicator: {
                    readonly pr: "component-padding-medium";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "component-padding-medium";
                };
                readonly hasAfterIcon: {
                    readonly pr: "component-padding-medium";
                };
            };
        };
        display: "inline-flex";
        gap: string;
        justifyContent: "center";
        alignItems: "center";
        textAlign: "center";
        whiteSpace: "nowrap";
        opacity: {
            disabled: "disabled";
        };
        outline: {
            focus: string;
        };
        outlineColor: {
            focus: "interaction-focus-default";
        };
        outlineWidth: {
            focus: string;
        };
        outlineOffset: number;
        pointerEvents: {
            loading: "none";
            disabled: "none";
        };
        transition: boolean;
        transitionDuration: number;
    };
    bare: {
        outlineOffset: number;
        p: number;
        backgroundColor: "transparent";
        appearance: {
            primary: {
                intent: {
                    none: {
                        color: {
                            _: "action-primary-normal";
                            hover: "action-primary-hover";
                            active: "action-primary-active";
                            selected: "action-primary-selected";
                        };
                    };
                    success: {
                        color: {
                            _: "action-success-normal";
                            hover: "action-success-hover";
                            active: "action-success-active";
                            selected: "action-success-selected";
                        };
                    };
                    destructive: {
                        color: {
                            _: "action-destructive-normal";
                            hover: "action-destructive-hover";
                            active: "action-destructive-active";
                            selected: "action-destructive-selected";
                        };
                    };
                };
            };
            secondary: {
                intent: {
                    none: {
                        color: {
                            _: "action-neutral-normal";
                            hover: "action-neutral-hover";
                            active: "action-neutral-active";
                            selected: "action-neutral-selected";
                        };
                    };
                };
            };
            inverted: {
                intent: {
                    none: {
                        color: {
                            _: "action-inverted-normal";
                            hover: "action-inverted-hover";
                            active: "action-inverted-active";
                            selected: "action-inverted-selected";
                        };
                    };
                };
                textDecoration: "underline";
            };
            reverseInverted: {
                intent: {
                    none: {
                        color: {
                            _: "action-reverseInverted-normal";
                            hover: "action-reverseInverted-hover";
                            active: "action-reverseInverted-active";
                            selected: "action-reverseInverted-selected";
                        };
                    };
                };
                textDecoration: "underline";
            };
        };
        size: {
            medium: {
                text: "body-medium";
                hasDropdownIndicator: {};
                hasBeforeIcon: {};
                hasAfterIcon: {};
            };
            large: {
                text: "body-large";
                hasDropdownIndicator: {};
                hasBeforeIcon: {};
                hasAfterIcon: {};
            };
        };
        display: "inline-flex";
        gap: string;
        justifyContent: "center";
        alignItems: "center";
        textAlign: "center";
        whiteSpace: "nowrap";
        opacity: {
            disabled: "disabled";
        };
        outline: {
            focus: string;
        };
        outlineColor: {
            focus: "interaction-focus-default";
        };
        outlineWidth: {
            focus: string;
        };
        pointerEvents: {
            loading: "none";
            disabled: "none";
        };
        transition: boolean;
        transitionDuration: number;
    };
};
