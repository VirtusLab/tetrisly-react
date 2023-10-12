import { SystemProps } from '@xstyled/styled-components';
import { HelperTextConfig } from '../HelperText/HelperText.styles';
import { BaseProps } from '../../types/BaseProps';
export type CheckboxConfig = {
    innerElements?: {
        input?: SystemProps;
        checkboxContainer?: BaseProps;
        checkboxIcon?: BaseProps;
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
        checkboxContainer: {
            position: "relative";
            cursor: "pointer";
        };
        input: {
            appearance: "none";
            display: "block";
            w: string;
            h: string;
            pointerEvents: "none";
            backgroundColor: {
                _: "$color-interaction-background-formField";
                checked: {
                    _: "$color-interaction-default-normal";
                    hover: "$color-interaction-default-hover";
                };
                indeterminate: {
                    _: "$color-interaction-default-normal";
                    hover: "$color-interaction-default-hover";
                };
            };
            ring: string;
            borderRadius: string;
            ringInset: true;
            ringColor: {
                _: "$color-interaction-border-neutral-normal";
                hover: "$color-interaction-border-hover";
                checked: {
                    _: "$color-interaction-ghost-normal";
                    hover: "$color-interaction-ghost-normal";
                };
                alert: {
                    _: "$color-interaction-border-alert";
                    hover: "$color-interaction-border-alert";
                };
                indeterminate: "transparent";
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
        };
        checkboxIcon: {
            position: "absolute";
            color: "$color-interaction-inverted-normal";
            w: string;
            h: string;
            left: number;
            top: number;
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
            paddingLeft: string;
        };
    };
};
