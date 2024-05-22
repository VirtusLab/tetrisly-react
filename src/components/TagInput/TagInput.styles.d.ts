import { BaseProps } from '../../types';
type InputConteinerConfig = BaseProps & {
    isValidationError: BaseProps;
};
export type TagInputConfig = BaseProps & {
    innerElements?: {
        input?: BaseProps;
        inputContainer?: InputConteinerConfig;
    };
};
export declare const defaultConfig: {
    display: "flex";
    flexDirection: "column";
    gap: string;
    w: string;
    padding: string;
    flexShrink: number;
    innerElements: {
        inputContainer: {
            w: string;
            h: string;
            borderRadius: string;
            border: string;
            display: "flex";
            gap: string;
            alignItems: "center";
            bg: "$color-interaction-background-formField";
            borderColor: "$color-interaction-border-neutral-normal";
            p: string;
            flexShrink: "0";
            ringInset: true;
            ring: string;
            ringColor: {
                _: "$color-interaction-border-neutral-normal";
                hoverWithoutButton: "$color-interaction-border-hover";
                alert: "$color-interaction-border-alert";
                focusWithin: "$color-interaction-neutral-subtle-normal";
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
                _: string;
                alert: string;
            };
            transition: "true";
            transitionDuration: string;
            cursor: "text";
            overflow: "hidden";
            isValidationError: {
                ringColor: "$color-interaction-border-alert";
            };
        };
        input: {
            h: string;
            w: string;
            p: string;
            flex: "1 1 auto";
            outline: string;
            text: "$typo-body-medium";
            color: {
                placeholder: "$color-content-tertiary";
            };
            backgroundColor: "transparent";
            opacity: {
                placeholder: number;
            };
        };
    };
};
export {};
