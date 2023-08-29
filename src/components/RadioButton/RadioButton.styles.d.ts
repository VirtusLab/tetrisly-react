export declare const config: {
    readonly display: "flex";
    readonly flexDirection: "column";
    readonly alignItems: "flex-start";
    readonly gap: "component-gap-xSmall";
    readonly minWidth: "3xSmall";
    readonly minHeight: "3xSmall";
    readonly color: "content-primary";
    readonly opacity: {
        readonly disabled: "disabled";
    };
    readonly pointerEvents: {
        readonly disabled: "none";
    };
    readonly innerComponents: {
        readonly radioButton: {
            readonly appearance: "none";
            readonly display: "flex";
            readonly w: "16px";
            readonly h: "16px";
            readonly justifyContent: "center";
            readonly alignItems: "center";
            readonly flexShrink: 0;
            readonly backgroundColor: "interaction-background-formField";
            readonly ring: {
                readonly _: "focus";
                readonly checked: "5px";
            };
            readonly borderRadius: "full";
            readonly ringInset: true;
            readonly ringColor: {
                readonly _: "interaction-border-neutral-normal";
                readonly hover: "interaction-border-hover";
                readonly checked: {
                    readonly _: "interaction-default-normal";
                    readonly hover: "interaction-default-hover";
                };
                readonly alert: {
                    readonly _: "interaction-border-alert";
                    readonly hover: "interaction-border-alert";
                };
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
                readonly focusWithin: "small";
            };
            readonly transition: true;
            readonly transitionDuration: 200;
            readonly cursor: "pointer";
        };
        readonly label: {
            readonly display: "flex";
            readonly justifyContent: "center";
            readonly alignItems: "center";
            readonly gap: "component-gap-small";
            readonly cursor: "pointer";
            readonly color: "content-primary";
            readonly text: "body-medium";
        };
        readonly helperText: {
            readonly paddingLeft: "component-padding-2xLarge";
        };
    };
};