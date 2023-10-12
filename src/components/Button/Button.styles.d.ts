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
        boxShadow: "$elevation-bottom-100";
        appearance: {
            primary: {
                color: "$color-action-inverted-normal";
                intent: {
                    none: {
                        backgroundColor: {
                            _: "$color-action-primary-normal";
                            hover: "$color-action-primary-hover";
                            active: "$color-action-primary-active";
                            selected: "$color-action-primary-selected";
                            loading: "$color-action-primary-loading";
                        };
                    };
                    success: {
                        backgroundColor: {
                            _: "$color-action-success-normal";
                            hover: "$color-action-success-hover";
                            active: "$color-action-success-active";
                            selected: "$color-action-success-selected";
                            loading: "$color-action-success-loading";
                        };
                    };
                    destructive: {
                        backgroundColor: {
                            _: "$color-action-destructive-normal";
                            hover: "$color-action-destructive-hover";
                            active: "$color-action-destructive-active";
                            selected: "$color-action-destructive-selected";
                            loading: "$color-action-destructive-loading";
                        };
                    };
                };
            };
            secondary: {
                backgroundColor: "$color-action-inverted-normal";
                ringInset: true;
                ring: string;
                ringColor: {
                    _: "$color-action-outline-normal";
                    hover: "$color-action-outline-hover";
                    active: "$color-action-outline-active";
                    selected: "$color-action-outline-selected";
                };
                intent: {
                    none: {
                        color: {
                            _: "$color-action-neutral-normal";
                            hover: "$color-action-neutral-hover";
                            active: "$color-action-neutral-active";
                            selected: "$color-action-neutral-selected";
                        };
                    };
                    success: {
                        color: {
                            _: "$color-action-success-normal";
                            hover: "$color-action-success-hover";
                            active: "$color-action-success-active";
                            selected: "$color-action-success-selected";
                        };
                    };
                    destructive: {
                        color: {
                            _: "$color-action-destructive-normal";
                            hover: "$color-action-destructive-hover";
                            active: "$color-action-destructive-active";
                            selected: "$color-action-destructive-selected";
                        };
                    };
                };
            };
            inverted: {
                intent: {
                    none: {
                        backgroundColor: {
                            _: "$color-action-inverted-normal";
                            hover: "$color-action-inverted-hover";
                            active: "$color-action-inverted-active";
                            selected: "$color-action-inverted-selected";
                            loading: "$color-action-inverted-loading";
                        };
                        color: {
                            _: "$color-action-neutral-normal";
                            hover: "$color-action-neutral-hover";
                            active: "$color-action-neutral-active";
                            selected: "$color-action-neutral-selected";
                        };
                    };
                };
            };
        };
        size: {
            readonly small: {
                readonly px: "$space-component-padding-medium";
                readonly h: "$size-small";
                readonly text: "$typo-body-medium";
                readonly hasDropdownIndicator: {
                    readonly pr: "$space-component-padding-small";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "$space-component-padding-small";
                };
                readonly hasAfterIcon: {
                    readonly pr: "$space-component-padding-small";
                };
            };
            readonly medium: {
                readonly px: "$space-component-padding-large";
                readonly h: "$size-medium";
                readonly text: "$typo-body-medium";
                readonly hasDropdownIndicator: {
                    readonly pr: "$space-component-padding-medium";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "$space-component-padding-medium";
                };
                readonly hasAfterIcon: {
                    readonly pr: "$space-component-padding-medium";
                };
            };
            readonly large: {
                readonly px: "$space-component-padding-large";
                readonly h: "$size-large";
                readonly text: "$typo-body-large";
                readonly hasDropdownIndicator: {
                    readonly pr: "$space-component-padding-medium";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "$space-component-padding-medium";
                };
                readonly hasAfterIcon: {
                    readonly pr: "$space-component-padding-medium";
                };
            };
        };
        display: "inline-flex";
        gap: string;
        w: string;
        justifyContent: "center";
        alignItems: "center";
        textAlign: "center";
        whiteSpace: "nowrap";
        opacity: {
            disabled: "$opacity-disabled";
        };
        outline: {
            focus: string;
        };
        outlineColor: {
            focus: "$color-interaction-focus-default";
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
            hover: "$color-action-ghost-hover";
            active: "$color-action-ghost-active";
            selected: "$color-action-ghost-selected";
        };
        appearance: {
            primary: {
                intent: {
                    none: {
                        color: {
                            _: "$color-action-primary-normal";
                            hover: "$color-action-primary-hover";
                            active: "$color-action-primary-active";
                            selected: "$color-action-primary-selected";
                        };
                    };
                    success: {
                        color: {
                            _: "$color-action-success-normal";
                            hover: "$color-action-success-hover";
                            active: "$color-action-success-active";
                            selected: "$color-action-success-selected";
                        };
                    };
                    destructive: {
                        color: {
                            _: "$color-action-destructive-normal";
                            hover: "$color-action-destructive-hover";
                            active: "$color-action-destructive-active";
                            selected: "$color-action-destructive-selected";
                        };
                    };
                };
            };
            secondary: {
                intent: {
                    none: {
                        color: {
                            _: "$color-action-neutral-normal";
                            hover: "$color-action-neutral-hover";
                            active: "$color-action-neutral-active";
                            selected: "$color-action-neutral-selected";
                        };
                    };
                };
            };
            inverted: {
                intent: {
                    none: {
                        backgroundColor: {
                            _: "$color-action-ghost-normal";
                            hover: "$color-action-ghost-inverted-hover";
                            active: "$color-action-ghost-inverted-active";
                            selected: "$color-action-ghost-inverted-selected";
                        };
                        color: {
                            _: "$color-action-inverted-normal";
                            hover: "$color-action-inverted-hover";
                            active: "$color-action-inverted-active";
                            selected: "$color-action-inverted-selected";
                        };
                    };
                };
            };
            reverseInverted: {
                intent: {
                    none: {
                        color: {
                            _: "$color-action-reverseInverted-normal";
                            hover: "$color-action-reverseInverted-hover";
                            active: "$color-action-reverseInverted-active";
                            selected: "$color-action-reverseInverted-selected";
                        };
                    };
                };
            };
        };
        size: {
            readonly small: {
                readonly px: "$space-component-padding-medium";
                readonly h: "$size-small";
                readonly text: "$typo-body-medium";
                readonly hasDropdownIndicator: {
                    readonly pr: "$space-component-padding-small";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "$space-component-padding-small";
                };
                readonly hasAfterIcon: {
                    readonly pr: "$space-component-padding-small";
                };
            };
            readonly medium: {
                readonly px: "$space-component-padding-large";
                readonly h: "$size-medium";
                readonly text: "$typo-body-medium";
                readonly hasDropdownIndicator: {
                    readonly pr: "$space-component-padding-medium";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "$space-component-padding-medium";
                };
                readonly hasAfterIcon: {
                    readonly pr: "$space-component-padding-medium";
                };
            };
            readonly large: {
                readonly px: "$space-component-padding-large";
                readonly h: "$size-large";
                readonly text: "$typo-body-large";
                readonly hasDropdownIndicator: {
                    readonly pr: "$space-component-padding-medium";
                };
                readonly hasBeforeIcon: {
                    readonly pl: "$space-component-padding-medium";
                };
                readonly hasAfterIcon: {
                    readonly pr: "$space-component-padding-medium";
                };
            };
        };
        display: "inline-flex";
        gap: string;
        w: string;
        justifyContent: "center";
        alignItems: "center";
        textAlign: "center";
        whiteSpace: "nowrap";
        opacity: {
            disabled: "$opacity-disabled";
        };
        outline: {
            focus: string;
        };
        outlineColor: {
            focus: "$color-interaction-focus-default";
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
        p: string;
        backgroundColor: "transparent";
        appearance: {
            primary: {
                intent: {
                    none: {
                        color: {
                            _: "$color-action-primary-normal";
                            hover: "$color-action-primary-hover";
                            active: "$color-action-primary-active";
                            selected: "$color-action-primary-selected";
                        };
                    };
                    success: {
                        color: {
                            _: "$color-action-success-normal";
                            hover: "$color-action-success-hover";
                            active: "$color-action-success-active";
                            selected: "$color-action-success-selected";
                        };
                    };
                    destructive: {
                        color: {
                            _: "$color-action-destructive-normal";
                            hover: "$color-action-destructive-hover";
                            active: "$color-action-destructive-active";
                            selected: "$color-action-destructive-selected";
                        };
                    };
                };
            };
            secondary: {
                intent: {
                    none: {
                        color: {
                            _: "$color-action-neutral-normal";
                            hover: "$color-action-neutral-hover";
                            active: "$color-action-neutral-active";
                            selected: "$color-action-neutral-selected";
                        };
                    };
                };
            };
            inverted: {
                intent: {
                    none: {
                        color: {
                            _: "$color-action-inverted-normal";
                            hover: "$color-action-inverted-hover";
                            active: "$color-action-inverted-active";
                            selected: "$color-action-inverted-selected";
                        };
                    };
                };
                textDecoration: "underline";
            };
            reverseInverted: {
                intent: {
                    none: {
                        color: {
                            _: "$color-action-reverseInverted-normal";
                            hover: "$color-action-reverseInverted-hover";
                            active: "$color-action-reverseInverted-active";
                            selected: "$color-action-reverseInverted-selected";
                        };
                    };
                };
                textDecoration: "underline";
            };
        };
        size: {
            medium: {
                text: "$typo-body-medium";
                hasDropdownIndicator: {};
                hasBeforeIcon: {};
                hasAfterIcon: {};
            };
            large: {
                text: "$typo-body-large";
                hasDropdownIndicator: {};
                hasBeforeIcon: {};
                hasAfterIcon: {};
            };
        };
        display: "inline-flex";
        gap: string;
        w: string;
        justifyContent: "center";
        alignItems: "center";
        textAlign: "center";
        whiteSpace: "nowrap";
        opacity: {
            disabled: "$opacity-disabled";
        };
        outline: {
            focus: string;
        };
        outlineColor: {
            focus: "$color-interaction-focus-default";
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
