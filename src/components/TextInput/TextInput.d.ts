/// <reference types="react" />
export declare const TextInput: import("react").ForwardRefExoticComponent<{
    type?: import("./TextInputType.type").TextInputType | undefined;
    beforeComponent?: import("../../types").InnerComponent<"Icon", import("@virtuslab/tetrisly-icons").IconProps> | import("../../types").InnerComponent<"Prefix", {
        text: string;
    }> | import("../../types").InnerComponent<"Dropdown", Pick<import("../Button").ButtonProps<"ghost">, "label" | "onClick">> | undefined;
    afterComponent?: import("../../types").InnerComponent<"Icon", import("@virtuslab/tetrisly-icons").IconProps> | import("../../types").InnerComponent<"Dropdown", Pick<import("../Button").ButtonProps<"ghost">, "label" | "onClick">> | import("../../types").InnerComponent<"Sufix", {
        text: string;
    }> | import("../../types").InnerComponent<"Button", Pick<import("../Button").ButtonProps<"ghost">, "label" | "onClick">> | undefined;
    state?: import("../../types").BasicInputState | undefined;
    hasClearButton?: boolean | undefined;
    custom?: import("../../utility-types/DeepPartial").DeepPartial<import("@xstyled/system").SystemProps<import("../../theme").Theme> & {
        readonly display: "flex";
        readonly alignItems: "center";
        readonly h: "medium";
        readonly padding: "component-padding-small component-padding-large";
        readonly flexShrink: 0;
        readonly ring: "100";
        readonly ringColor: {
            readonly _: "interaction-border-neutral-normal";
            readonly hover: "interaction-border-hover";
            readonly focus: "interaction-focus-default";
            readonly alert: "interaction-border-alert";
        };
        readonly borderRadius: "medium";
        readonly opacity: {
            readonly disabled: "disabled";
        };
        readonly outlineStyle: {
            readonly focusWithin: "solid";
        };
        readonly outlineColor: {
            readonly focusWithin: "interaction-focus-default";
        };
        readonly outlineWidth: {
            readonly focusWithin: "focus";
        };
        readonly outlineOffset: {
            readonly alert: "focus";
        };
        readonly transition: true;
        readonly transitionDuration: 50;
        readonly cursor: "text";
        readonly pointerEvents: {
            readonly disabled: "none";
        };
        readonly innerComponents: {
            readonly input: {
                readonly w: "100%";
                readonly h: "100%";
                readonly outline: "none";
                readonly text: "body-medium";
                readonly color: {
                    readonly placeholder: "content-tertiary";
                };
                readonly backgroundColor: "interaction-background-formField";
            };
            readonly icon: {
                readonly color: "content-secondary";
            };
            readonly text: {
                readonly text: "body-medium";
                readonly color: "content-secondary";
            };
        };
        readonly spacing: {
            readonly beforeComponent: {
                readonly Icon: {
                    readonly marginLeft: "component-padding-medium";
                    readonly marginRight: "component-padding-small";
                };
                readonly Avatar: {
                    readonly margin: "0 component-padding-small";
                };
                readonly Prefix: {
                    readonly margin: "0 component-padding-large";
                };
                readonly Dropdown: {
                    readonly marginLeft: "component-padding-xSmall";
                    readonly marginRight: "component-padding-small";
                };
            };
            readonly afterComponent: {
                readonly Icon: {
                    readonly marginLeft: "component-padding-small";
                    readonly marginRight: "component-padding-large";
                };
                readonly Sufix: {
                    readonly marginLeft: "component-padding-small";
                    readonly marginRight: "component-padding-large";
                };
                readonly Button: {
                    readonly marginLeft: "component-padding-small";
                    readonly marginRight: "component-padding-xSmall";
                };
                readonly IconButton: {
                    readonly marginLeft: "component-padding-small";
                    readonly marginRight: "component-padding-xSmall";
                };
                readonly Dropdown: {
                    readonly marginLeft: "component-padding-small";
                    readonly marginRight: "component-padding-xSmall";
                };
            };
        };
    }> | undefined;
} & Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "disabled" | "color" | "checked" | "type"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme> & import("react").RefAttributes<HTMLInputElement>>;
