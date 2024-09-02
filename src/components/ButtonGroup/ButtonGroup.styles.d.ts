import { BaseProps } from '../../types';
export type ButtonGroupConfig = {
    button: {
        size: {
            medium: BaseProps;
            small: BaseProps;
        };
    } & BaseProps;
} & BaseProps;
export declare const defaultConfig: {
    readonly display: "inline-flex";
    readonly justifyContent: "center";
    readonly alignItems: "center";
    readonly button: {
        readonly color: {
            readonly _: "$color-action-neutral-normal";
            readonly hover: "$color-action-neutral-hover";
        };
        readonly backgroundColor: {
            readonly _: "$color-action-inverted-normal";
            readonly active: "$color-action-ghost-active";
            readonly hover: "$color-action-ghost-hover";
            readonly selected: "$color-action-ghost-selected";
        };
        readonly ringColor: "$color-action-outline-normal";
        readonly size: {
            readonly medium: {
                readonly h: "$size-medium";
                readonly px: "$space-component-padding-large";
            };
            readonly small: {
                readonly h: "$size-small";
                readonly px: "$space-component-padding-medium";
            };
        };
        readonly borderRadius: {
            readonly first: "$border-radius-large 0px 0px $border-radius-large";
            readonly last: "0px $border-radius-large $border-radius-large 0px";
        };
        readonly transition: true;
        readonly transitionDuration: 200;
    };
};
export declare const buttonGroupStyles: {
    defaultConfig: {
        readonly display: "inline-flex";
        readonly justifyContent: "center";
        readonly alignItems: "center";
        readonly button: {
            readonly color: {
                readonly _: "$color-action-neutral-normal";
                readonly hover: "$color-action-neutral-hover";
            };
            readonly backgroundColor: {
                readonly _: "$color-action-inverted-normal";
                readonly active: "$color-action-ghost-active";
                readonly hover: "$color-action-ghost-hover";
                readonly selected: "$color-action-ghost-selected";
            };
            readonly ringColor: "$color-action-outline-normal";
            readonly size: {
                readonly medium: {
                    readonly h: "$size-medium";
                    readonly px: "$space-component-padding-large";
                };
                readonly small: {
                    readonly h: "$size-small";
                    readonly px: "$space-component-padding-medium";
                };
            };
            readonly borderRadius: {
                readonly first: "$border-radius-large 0px 0px $border-radius-large";
                readonly last: "0px $border-radius-large $border-radius-large 0px";
            };
            readonly transition: true;
            readonly transitionDuration: 200;
        };
    };
};
