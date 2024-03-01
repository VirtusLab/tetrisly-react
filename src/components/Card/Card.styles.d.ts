import type { BaseProps } from '../../types/BaseProps';
export type CardHeaderConfig = {
    title?: BaseProps;
    content?: BaseProps;
    description?: BaseProps;
    beforeComponent?: BaseProps;
    actions?: BaseProps;
} & BaseProps;
export type CardContentConfig = BaseProps;
export type CardFooterConfig = {
    actions?: BaseProps;
} & BaseProps;
export type CardConfig = BaseProps & {
    innerElements?: {
        header?: CardHeaderConfig;
        content?: CardContentConfig;
        footer?: CardFooterConfig;
    };
};
export declare const cardConfig: {
    readonly display: "flex";
    readonly w: "fit-content";
    readonly p: "$space-component-padding-null";
    readonly flexDirection: "column";
    readonly alignItems: "flex-start";
    readonly gap: "$space-component-padding-null";
    readonly borderRadius: "$border-radius-xLarge";
    readonly bg: "$color-background-default";
    readonly boxShadow: "$elevation-bottom-200";
    readonly borderWidth: "$border-width-small";
    readonly borderStyle: "$border-style-solid";
    readonly borderColor: "$color-border-defaultA";
    readonly overflow: "hidden";
    readonly innerElements: {
        readonly header: {
            readonly display: "flex";
            readonly w: "100%";
            readonly py: "$space-component-padding-large";
            readonly px: "$space-component-padding-2xLarge";
            readonly alignItems: "center";
            readonly gap: "$space-component-gap-large";
            readonly borderBottomWidth: "$border-width-small";
            readonly borderStyle: "$border-style-solid";
            readonly borderColor: "$color-border-defaultA";
            readonly beforeComponent: {
                readonly display: "flex";
                readonly padding: "$space-component-padding-null";
                readonly alignItems: "center";
                readonly gap: "$space-component-gap-null";
            };
            readonly content: {
                readonly display: "flex";
                readonly padding: "$space-component-padding-null";
                readonly flexDirection: "column";
                readonly alignItems: "flex-start";
                readonly gap: "$space-component-padding-null";
                readonly flex: "1 0 0";
            };
            readonly title: {
                readonly color: "$color-content-primary";
                readonly text: "$typo-body-strong-large";
            };
            readonly description: {
                readonly color: "$color-content-secondary";
                readonly text: "$typo-body-medium";
            };
            readonly actions: {
                readonly display: "flex";
                readonly padding: "$space-component-padding-null";
                readonly justifyContent: "flex-end";
                readonly alignItems: "center";
                readonly gap: "$space-component-gap-large";
            };
        };
        readonly content: {
            readonly padding: "$space-component-padding-2xLarge";
            readonly w: "100%";
        };
        readonly footer: {
            readonly display: "flex";
            readonly px: "$space-component-padding-medium";
            readonly pb: "$space-component-padding-medium";
            readonly w: "100%";
            readonly actions: {
                readonly w: "100%";
                readonly display: "flex";
                readonly padding: "$space-component-padding-null";
                readonly justifyContent: "flex-end";
                readonly alignItems: "center";
                readonly gap: "$space-component-gap-small";
            };
        };
    };
};
