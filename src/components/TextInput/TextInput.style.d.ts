import { BaseProps } from '../../types/BaseProps';
export type TextInputConfig = {
    innerComponents: Record<'input' | 'icon' | 'text' | 'clearButton', BaseProps>;
    spacing: Record<'beforeComponent', Record<'Icon' | 'Avatar' | 'Prefix' | 'Dropdown', BaseProps>> | Record<'afterComponent', Record<'Icon' | 'Sufix' | 'Button' | 'IconButton' | 'Dropdown', BaseProps>>;
} & BaseProps;
export declare const config: {
    display: "flex";
    alignItems: "center";
    h: string;
    padding: string;
    flexShrink: number;
    ring: string;
    ringColor: {
        _: "interaction-border-neutral-normal";
        hover: "interaction-border-hover";
        focus: "interaction-focus-default";
        alert: "interaction-border-alert";
    };
    borderRadius: string;
    opacity: {
        disabled: "disabled";
    };
    outlineStyle: {
        focusWithin: "solid";
    };
    outlineColor: {
        focusWithin: "interaction-focus-default";
    };
    outlineWidth: {
        focusWithin: string;
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
    innerComponents: {
        input: {
            w: string;
            h: string;
            outline: string;
            text: "body-medium";
            color: {
                placeholder: "content-tertiary";
            };
            backgroundColor: "interaction-background-formField";
        };
        icon: {
            color: "content-secondary";
        };
        text: {
            text: "body-medium";
            color: "content-secondary";
        };
        clearButton: {
            marginLeft: string;
        };
    };
    spacing: {
        beforeComponent: {
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
        afterComponent: {
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
