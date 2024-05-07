import type { BaseProps } from '../../types/BaseProps';
export type CornerDialogFooterConfig = {
    actions?: BaseProps;
} & BaseProps;
export type CornerDialogConfig = BaseProps & {
    innerElements?: {
        intentIndicator?: BaseProps;
        intentWarning?: BaseProps;
        intentNegative?: BaseProps;
        body?: BaseProps;
        header?: BaseProps;
        headerTitle?: BaseProps;
        closeButton?: BaseProps;
        content?: BaseProps;
        footer?: CornerDialogFooterConfig;
    };
};
export declare const defaultConfig: {
    readonly display: "flex";
    readonly w: "fit-content";
    readonly minWidth: "420px";
    readonly p: "$space-component-padding-2xLarge";
    readonly flexDirection: "row";
    readonly alignItems: "flex-start";
    readonly gap: "$space-component-padding-large";
    readonly borderRadius: "$border-radius-xLarge";
    readonly bg: "$color-interaction-background-modeless";
    readonly boxShadow: "$elevation-bottom-300";
    readonly borderWidth: "$border-width-small";
    readonly borderStyle: "$border-style-solid";
    readonly borderColor: "$color-border-defaultA";
    readonly overflow: "hidden";
    readonly innerElements: {
        readonly intentIndicator: {
            readonly h: "$size-xSmall";
            readonly display: "flex";
            readonly alignItems: "flex-end";
        };
        readonly intentWarning: {
            readonly color: "$color-content-warning-secondary";
        };
        readonly intentNegative: {
            readonly color: "$color-content-negative-secondary";
        };
        readonly body: {
            readonly display: "flex";
            readonly flexGrow: 1;
            readonly flexDirection: "column";
            readonly justifyContent: "space-between";
            readonly gap: "$space-component-padding-large";
        };
        readonly header: {
            readonly display: "flex";
            readonly alignSelf: "stretch";
            readonly alignItems: "center";
        };
        readonly headerTitle: {
            readonly display: "flex";
            readonly flexGrow: 1;
            readonly alignItems: "center";
            readonly justifyContent: "space-between";
            readonly color: "$color-content-primary";
            readonly text: "$typo-body-strong-large";
        };
        readonly closeButton: {};
        readonly content: {
            readonly text: "$typo-body-medium";
            readonly color: "$color-content-secondary";
        };
        readonly footer: {
            readonly display: "flex";
            readonly alignSelf: "stretch";
            readonly justifyContent: "flex-end";
            readonly gap: "$space-component-padding-small";
        };
    };
};
export declare const cornerDialogStyles: {
    defaultConfig: {
        readonly display: "flex";
        readonly w: "fit-content";
        readonly minWidth: "420px";
        readonly p: "$space-component-padding-2xLarge";
        readonly flexDirection: "row";
        readonly alignItems: "flex-start";
        readonly gap: "$space-component-padding-large";
        readonly borderRadius: "$border-radius-xLarge";
        readonly bg: "$color-interaction-background-modeless";
        readonly boxShadow: "$elevation-bottom-300";
        readonly borderWidth: "$border-width-small";
        readonly borderStyle: "$border-style-solid";
        readonly borderColor: "$color-border-defaultA";
        readonly overflow: "hidden";
        readonly innerElements: {
            readonly intentIndicator: {
                readonly h: "$size-xSmall";
                readonly display: "flex";
                readonly alignItems: "flex-end";
            };
            readonly intentWarning: {
                readonly color: "$color-content-warning-secondary";
            };
            readonly intentNegative: {
                readonly color: "$color-content-negative-secondary";
            };
            readonly body: {
                readonly display: "flex";
                readonly flexGrow: 1;
                readonly flexDirection: "column";
                readonly justifyContent: "space-between";
                readonly gap: "$space-component-padding-large";
            };
            readonly header: {
                readonly display: "flex";
                readonly alignSelf: "stretch";
                readonly alignItems: "center";
            };
            readonly headerTitle: {
                readonly display: "flex";
                readonly flexGrow: 1;
                readonly alignItems: "center";
                readonly justifyContent: "space-between";
                readonly color: "$color-content-primary";
                readonly text: "$typo-body-strong-large";
            };
            readonly closeButton: {};
            readonly content: {
                readonly text: "$typo-body-medium";
                readonly color: "$color-content-secondary";
            };
            readonly footer: {
                readonly display: "flex";
                readonly alignSelf: "stretch";
                readonly justifyContent: "flex-end";
                readonly gap: "$space-component-padding-small";
            };
        };
    };
};
