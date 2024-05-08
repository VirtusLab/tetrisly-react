import { NewItemButtonState } from './NewItemButtonState.type';
import type { BaseProps } from '../../types/BaseProps';
export type NewItemButtonConfig = {
    state?: Partial<Record<NewItemButtonState, BaseProps>>;
    innerElements?: {
        text?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    readonly display: "inline-flex";
    readonly flexDirection: "column";
    readonly justifyContent: "center";
    readonly alignItems: "center";
    readonly gap: "$space-component-gap-small";
    readonly minH: "120px";
    readonly minWidth: "120px";
    readonly h: "100%";
    readonly w: "100%";
    readonly borderWidth: "$border-width-small";
    readonly borderStyle: "$border-style-dashed";
    readonly borderRadius: "$border-radius-large";
    readonly padding: "$space-component-padding-xLarge";
    readonly text: "$typo-body-medium";
    readonly textAlign: "center";
    readonly whiteSpace: "nowrap";
    readonly color: "$color-action-neutral-normal";
    readonly backgroundColor: "$color-interaction-background-formField";
    readonly transition: true;
    readonly transitionDuration: 200;
    readonly outline: {
        readonly focus: "solid";
    };
    readonly outlineColor: {
        readonly focus: "$color-interaction-focus-default";
    };
    readonly outlineWidth: {
        readonly focus: "$border-width-focus";
    };
    readonly outlineOffset: 1;
    readonly state: {
        readonly normal: {
            readonly borderColor: {
                readonly _: "$color-border-neutral-subtle";
                readonly hover: "$color-interaction-border-hover";
            };
        };
        readonly alert: {
            readonly borderColor: "$color-interaction-border-alert";
        };
        readonly disabled: {
            readonly borderColor: "$color-border-neutral-subtle";
            readonly opacity: "$opacity-disabled";
            readonly pointerEvents: "none";
        };
    };
    readonly innerElements: {
        readonly text: {
            readonly text: "$typo-body-medium";
            readonly color: "$color-content-primary";
        };
    };
};
export declare const newItemButtonStyles: {
    defaultConfig: {
        readonly display: "inline-flex";
        readonly flexDirection: "column";
        readonly justifyContent: "center";
        readonly alignItems: "center";
        readonly gap: "$space-component-gap-small";
        readonly minH: "120px";
        readonly minWidth: "120px";
        readonly h: "100%";
        readonly w: "100%";
        readonly borderWidth: "$border-width-small";
        readonly borderStyle: "$border-style-dashed";
        readonly borderRadius: "$border-radius-large";
        readonly padding: "$space-component-padding-xLarge";
        readonly text: "$typo-body-medium";
        readonly textAlign: "center";
        readonly whiteSpace: "nowrap";
        readonly color: "$color-action-neutral-normal";
        readonly backgroundColor: "$color-interaction-background-formField";
        readonly transition: true;
        readonly transitionDuration: 200;
        readonly outline: {
            readonly focus: "solid";
        };
        readonly outlineColor: {
            readonly focus: "$color-interaction-focus-default";
        };
        readonly outlineWidth: {
            readonly focus: "$border-width-focus";
        };
        readonly outlineOffset: 1;
        readonly state: {
            readonly normal: {
                readonly borderColor: {
                    readonly _: "$color-border-neutral-subtle";
                    readonly hover: "$color-interaction-border-hover";
                };
            };
            readonly alert: {
                readonly borderColor: "$color-interaction-border-alert";
            };
            readonly disabled: {
                readonly borderColor: "$color-border-neutral-subtle";
                readonly opacity: "$opacity-disabled";
                readonly pointerEvents: "none";
            };
        };
        readonly innerElements: {
            readonly text: {
                readonly text: "$typo-body-medium";
                readonly color: "$color-content-primary";
            };
        };
    };
};
