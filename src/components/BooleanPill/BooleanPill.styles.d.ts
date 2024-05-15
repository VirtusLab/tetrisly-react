import { BooleanPillState } from './BooleanPillState.type';
import { BaseProps } from '../../types';
export type BooleanPillConfig = {
    isSelected: BaseProps;
    hasAvatar: BaseProps;
    state?: Partial<Record<BooleanPillState, Record<'primary' | 'inverted', BaseProps>>>;
} & BaseProps;
export declare const defaultConfig: {
    readonly display: "inline-flex";
    readonly justifyContent: "center";
    readonly alignItems: "center";
    readonly textAlign: "center";
    readonly whiteSpace: "nowrap";
    readonly h: "$size-small";
    readonly padding: "$space-component-padding-xSmall $space-component-padding-medium";
    readonly gap: "$space-component-gap-small";
    readonly borderRadius: "$border-radius-large";
    readonly color: "$color-content-primary";
    readonly borderWidth: "$border-width-small";
    readonly borderColor: "$color-transparent";
    readonly transition: true;
    readonly transitionDuration: 200;
    readonly outline: {
        readonly focus: "solid";
    };
    readonly outlineColor: {
        readonly _: "$color-interaction-focus-default";
        readonly focus: "$color-interaction-focus-default";
    };
    readonly outlineWidth: {
        readonly focus: "$border-width-focus";
    };
    readonly outlineOffset: 1;
    readonly hasAvatar: {
        readonly pl: "$space-component-padding-xSmall";
    };
    readonly isSelected: {
        readonly pl: "$space-component-padding-small";
        readonly backgroundColor: "$color-interaction-background-formField";
        readonly borderColor: {
            readonly _: "$color-interaction-border-neutral-normal";
            readonly hover: "$color-interaction-border-neutral-hover";
            readonly active: "$color-interaction-border-neutral-active";
        };
    };
    readonly state: {
        readonly default: {
            readonly primary: {
                readonly backgroundColor: {
                    readonly _: "$color-interaction-neutral-subtle-normal";
                    readonly hover: "$color-interaction-neutral-subtle-hover";
                    readonly active: "$color-interaction-neutral-subtle-active";
                };
            };
            readonly inverted: {
                readonly backgroundColor: "$color-interaction-background-formField";
                readonly borderColor: {
                    readonly _: "$color-interaction-border-neutral-normal";
                    readonly hover: "$color-interaction-border-neutral-hover";
                    readonly active: "$color-interaction-border-neutral-active";
                };
            };
        };
        readonly disabled: {
            readonly primary: {
                readonly backgroundColor: "$color-interaction-neutral-subtle-normal";
                readonly opacity: "$opacity-disabled";
                readonly pointerEvents: "none";
            };
            readonly inverted: {
                readonly backgroundColor: "$color-interaction-background-formField";
                readonly borderColor: "$color-interaction-border-neutral-normal";
                readonly opacity: "$opacity-disabled";
                readonly pointerEvents: "none";
            };
        };
    };
};
export declare const booleanPillStyles: {
    defaultConfig: {
        readonly display: "inline-flex";
        readonly justifyContent: "center";
        readonly alignItems: "center";
        readonly textAlign: "center";
        readonly whiteSpace: "nowrap";
        readonly h: "$size-small";
        readonly padding: "$space-component-padding-xSmall $space-component-padding-medium";
        readonly gap: "$space-component-gap-small";
        readonly borderRadius: "$border-radius-large";
        readonly color: "$color-content-primary";
        readonly borderWidth: "$border-width-small";
        readonly borderColor: "$color-transparent";
        readonly transition: true;
        readonly transitionDuration: 200;
        readonly outline: {
            readonly focus: "solid";
        };
        readonly outlineColor: {
            readonly _: "$color-interaction-focus-default";
            readonly focus: "$color-interaction-focus-default";
        };
        readonly outlineWidth: {
            readonly focus: "$border-width-focus";
        };
        readonly outlineOffset: 1;
        readonly hasAvatar: {
            readonly pl: "$space-component-padding-xSmall";
        };
        readonly isSelected: {
            readonly pl: "$space-component-padding-small";
            readonly backgroundColor: "$color-interaction-background-formField";
            readonly borderColor: {
                readonly _: "$color-interaction-border-neutral-normal";
                readonly hover: "$color-interaction-border-neutral-hover";
                readonly active: "$color-interaction-border-neutral-active";
            };
        };
        readonly state: {
            readonly default: {
                readonly primary: {
                    readonly backgroundColor: {
                        readonly _: "$color-interaction-neutral-subtle-normal";
                        readonly hover: "$color-interaction-neutral-subtle-hover";
                        readonly active: "$color-interaction-neutral-subtle-active";
                    };
                };
                readonly inverted: {
                    readonly backgroundColor: "$color-interaction-background-formField";
                    readonly borderColor: {
                        readonly _: "$color-interaction-border-neutral-normal";
                        readonly hover: "$color-interaction-border-neutral-hover";
                        readonly active: "$color-interaction-border-neutral-active";
                    };
                };
            };
            readonly disabled: {
                readonly primary: {
                    readonly backgroundColor: "$color-interaction-neutral-subtle-normal";
                    readonly opacity: "$opacity-disabled";
                    readonly pointerEvents: "none";
                };
                readonly inverted: {
                    readonly backgroundColor: "$color-interaction-background-formField";
                    readonly borderColor: "$color-interaction-border-neutral-normal";
                    readonly opacity: "$opacity-disabled";
                    readonly pointerEvents: "none";
                };
            };
        };
    };
};
