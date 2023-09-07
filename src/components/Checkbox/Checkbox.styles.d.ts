import { SystemProps } from '@xstyled/styled-components';
import { BaseProps } from '../../types/BaseProps';
export type CheckboxConfig = {
    innerComponents: {
        checkbox: SystemProps;
        checkboxContainer: SystemProps;
        checkboxIcon: SystemProps;
        label: SystemProps;
        helperText: SystemProps;
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
    innerComponents: {
        checkboxContainer: {
            position: "relative";
            cursor: "pointer";
        };
        checkbox: {
            appearance: "none";
            display: "block";
            w: string;
            h: string;
            pointerEvents: "none";
            backgroundColor: {
                _: "interaction-background-formField";
                checked: {
                    _: "interaction-default-normal";
                    hover: "interaction-default-hover";
                };
                indeterminate: {
                    _: "interaction-default-normal";
                    hover: "interaction-default-hover";
                };
            };
            color: "white";
            ring: string;
            borderRadius: string;
            ringInset: true;
            ringColor: {
                _: "interaction-border-neutral-normal";
                hover: "interaction-border-hover";
                checked: {
                    _: "interaction-ghost-normal";
                    hover: "interaction-ghost-normal";
                };
                alert: {
                    _: "interaction-border-alert";
                    hover: "interaction-border-alert";
                };
                indeterminate: "transparent";
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
        };
        checkboxIcon: {
            position: "absolute";
            color: "interaction-inverted-normal";
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
            color: "content-primary";
            text: "body-medium";
        };
        helperText: {
            paddingLeft: string;
        };
    };
};
