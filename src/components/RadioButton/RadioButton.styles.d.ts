import type { SystemProps } from '@xstyled/styled-components';
import type { HelperTextConfig } from '../HelperText/HelperText.styles';
import type { BaseProps } from '../../types/BaseProps';
export type RadioButtonConfig = {
    innerElements?: {
        radioButton?: SystemProps;
        label?: BaseProps;
        helperText?: HelperTextConfig;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "flex";
    flexDirection: "column";
    alignItems: "flex-start";
    gap: string;
    minWidth: string;
    minHeight: string;
    color: "content-primary";
    opacity: {
        disabled: "disabled";
    };
    pointerEvents: {
        disabled: "none";
    };
    innerElements: {
        radioButton: {
            appearance: "none";
            display: "flex";
            w: string;
            h: string;
            justifyContent: "center";
            alignItems: "center";
            flexShrink: number;
            backgroundColor: "interaction-background-formField";
            ring: {
                _: string;
                checked: string;
            };
            borderRadius: string;
            ringInset: true;
            ringColor: {
                _: "interaction-border-neutral-normal";
                hover: "interaction-border-hover";
                checked: {
                    _: "interaction-default-normal";
                    hover: "interaction-default-hover";
                };
                alert: {
                    _: "interaction-border-alert";
                    hover: "interaction-border-alert";
                };
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
                focusWithin: string;
            };
            transition: true;
            transitionDuration: number;
            cursor: "pointer";
        };
        label: {
            display: "flex";
            justifyContent: "center";
            alignItems: "center";
            gap: string;
            cursor: "pointer";
            color: "content-primary";
            text: "body-medium";
        };
        helperText: {
            pl: string;
        };
    };
};
