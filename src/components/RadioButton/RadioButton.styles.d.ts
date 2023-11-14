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
    color: "$color-content-primary";
    opacity: {
        disabled: "$opacity-disabled";
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
            backgroundColor: "$color-interaction-background-formField";
            ring: {
                _: string;
                checked: string;
            };
            borderRadius: string;
            ringInset: true;
            ringColor: {
                _: "$color-interaction-border-neutral-normal";
                hover: "$color-interaction-border-hover";
                checked: {
                    _: "$color-interaction-default-normal";
                    hover: "$color-interaction-default-hover";
                };
                alert: {
                    _: "$color-interaction-border-alert";
                    hover: "$color-interaction-border-alert";
                };
            };
            outlineStyle: {
                focusWithin: "solid";
            };
            outlineColor: {
                focusWithin: "$color-interaction-focus-default";
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
            color: "$color-content-primary";
            text: "$typo-body-medium";
        };
        helperText: {
            pl: string;
        };
    };
};
