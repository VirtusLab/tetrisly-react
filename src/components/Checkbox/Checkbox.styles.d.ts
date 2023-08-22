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
        readonly checkboxContainer: {
            readonly position: "relative";
            readonly cursor: "pointer";
        };
        readonly checkbox: {
            readonly appearance: "none";
            readonly display: "block";
            readonly w: "3xSmall";
            readonly h: "3xSmall";
            readonly pointerEvents: "none";
            readonly backgroundColor: {
                readonly _: "interaction-background-formField";
                readonly checked: {
                    readonly _: "interaction-default-normal";
                    readonly hover: "interaction-default-hover";
                };
                readonly indeterminate: {
                    readonly _: "interaction-default-normal";
                    readonly hover: "interaction-default-hover";
                };
            };
            readonly color: "white";
            readonly ring: "focus";
            readonly borderRadius: "medium";
            readonly ringInset: true;
            readonly ringColor: {
                readonly _: "interaction-border-neutral-normal";
                readonly hover: "interaction-border-hover";
                readonly checked: {
                    readonly _: "interaction-ghost-normal";
                    readonly hover: "interaction-ghost-normal";
                };
                readonly alert: {
                    readonly _: "interaction-border-alert";
                    readonly hover: "interaction-border-alert";
                };
                readonly indeterminate: "transparent";
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
        };
        readonly checkboxIcon: {
            readonly position: "absolute";
            readonly color: "interaction-inverted-normal";
            readonly w: "3xSmall";
            readonly h: "3xSmall";
            readonly left: 0;
            readonly top: 0;
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
