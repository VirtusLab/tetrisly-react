import { BaseProps } from '../../types/BaseProps';
export type TextInputConfig = {
    innerElements?: {
        input?: BaseProps;
        icon?: BaseProps;
        text?: BaseProps;
        clearButton?: BaseProps;
        beforeComponent?: {
            spacing?: Partial<Record<'Icon' | 'Avatar' | 'Prefix' | 'Dropdown', BaseProps>>;
        } & BaseProps;
        afterComponent?: {
            spacing?: Partial<Record<'Icon' | 'Sufix' | 'Button' | 'IconButton' | 'Dropdown', BaseProps>>;
        } & BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    bg: "$color-interaction-background-formField";
    display: "flex";
    alignItems: "center";
    w: string;
    h: string;
    padding: string;
    flexShrink: number;
    ringInset: true;
    boxShadow: "0 0 #0000";
    ring: string;
    ringColor: {
        _: "$color-interaction-border-neutral-normal";
        hoverWithoutButton: "$color-interaction-border-hover";
        alert: "$color-interaction-border-alert";
    };
    borderRadius: string;
    opacity: {
        disabled: "$opacity-disabled";
    };
    outlineStyle: {
        '&:has(input:focus)': string;
    };
    outlineColor: {
        focusWithin: "$color-interaction-focus-default";
    };
    outlineWidth: {
        '&:has(input:focus)': string;
    };
    outlineOffset: {
        alert: string;
    };
    transition: boolean;
    transitionDuration: number;
    cursor: "text";
    pointerEvents: {
        disabled: "none";
    };
    innerElements: {
        input: {
            w: string;
            h: string;
            outline: string;
            text: "$typo-body-medium";
            color: {
                placeholder: "$color-content-tertiary";
            };
            p: number;
            backgroundColor: "transparent";
            opacity: {
                placeholder: number;
            };
        };
        icon: {
            color: "$color-content-secondary";
        };
        text: {
            text: "$typo-body-medium";
            color: "$color-content-secondary";
        };
        clearButton: {
            marginLeft: string;
        };
        beforeComponent: {
            spacing: {
                Icon: {
                    marginLeft: string;
                    marginRight: string;
                };
                Avatar: {
                    margin: string;
                };
                Prefix: {
                    margin: string;
                };
                Dropdown: {
                    marginLeft: string;
                    marginRight: string;
                };
            };
        };
        afterComponent: {
            spacing: {
                Icon: {
                    marginLeft: string;
                    marginRight: string;
                };
                Sufix: {
                    marginLeft: string;
                    marginRight: string;
                };
                Button: {
                    marginLeft: string;
                    marginRight: string;
                };
                IconButton: {
                    marginLeft: string;
                    marginRight: string;
                };
                Dropdown: {
                    marginLeft: string;
                    marginRight: string;
                };
            };
        };
    };
};
export declare const textInputStyles: {
    defaultConfig: {
        bg: "$color-interaction-background-formField";
        display: "flex";
        alignItems: "center";
        w: string;
        h: string;
        padding: string;
        flexShrink: number;
        ringInset: true;
        boxShadow: "0 0 #0000";
        ring: string;
        ringColor: {
            _: "$color-interaction-border-neutral-normal";
            hoverWithoutButton: "$color-interaction-border-hover";
            alert: "$color-interaction-border-alert";
        };
        borderRadius: string;
        opacity: {
            disabled: "$opacity-disabled";
        };
        outlineStyle: {
            '&:has(input:focus)': string;
        };
        outlineColor: {
            focusWithin: "$color-interaction-focus-default";
        };
        outlineWidth: {
            '&:has(input:focus)': string;
        };
        outlineOffset: {
            alert: string;
        };
        transition: boolean;
        transitionDuration: number;
        cursor: "text";
        pointerEvents: {
            disabled: "none";
        };
        innerElements: {
            input: {
                w: string;
                h: string;
                outline: string;
                text: "$typo-body-medium";
                color: {
                    placeholder: "$color-content-tertiary";
                };
                p: number;
                backgroundColor: "transparent";
                opacity: {
                    placeholder: number;
                };
            };
            icon: {
                color: "$color-content-secondary";
            };
            text: {
                text: "$typo-body-medium";
                color: "$color-content-secondary";
            };
            clearButton: {
                marginLeft: string;
            };
            beforeComponent: {
                spacing: {
                    Icon: {
                        marginLeft: string;
                        marginRight: string;
                    };
                    Avatar: {
                        margin: string;
                    };
                    Prefix: {
                        margin: string;
                    };
                    Dropdown: {
                        marginLeft: string;
                        marginRight: string;
                    };
                };
            };
            afterComponent: {
                spacing: {
                    Icon: {
                        marginLeft: string;
                        marginRight: string;
                    };
                    Sufix: {
                        marginLeft: string;
                        marginRight: string;
                    };
                    Button: {
                        marginLeft: string;
                        marginRight: string;
                    };
                    IconButton: {
                        marginLeft: string;
                        marginRight: string;
                    };
                    Dropdown: {
                        marginLeft: string;
                        marginRight: string;
                    };
                };
            };
        };
    };
};
