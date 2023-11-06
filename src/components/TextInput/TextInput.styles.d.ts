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
    display: "flex";
    alignItems: "center";
    h: string;
    padding: string;
    flexShrink: number;
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
            backgroundColor: "$color-interaction-background-formField";
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
