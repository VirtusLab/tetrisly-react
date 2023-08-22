export declare const config: {
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
};
