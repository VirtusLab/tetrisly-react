import { SelectablePillState } from './SelectablePillState.type';
import { BaseProps } from '../../types';
export type SelectablePillConfig = {
    isSelected: BaseProps;
    state?: Partial<Record<SelectablePillState, Record<'primary' | 'inverted', BaseProps>>>;
    hasIcon?: BaseProps;
    hasAvatar?: BaseProps;
    hasPrefix?: BaseProps;
    innerElements?: {
        icon?: BaseProps;
        actionIcon?: BaseProps;
        prefix?: BaseProps;
        contentContainer?: Record<'small' | 'xSmall', BaseProps>;
        textContainer?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    readonly display: "inline-flex";
    readonly justifyContent: "center";
    readonly alignItems: "center";
    readonly textAlign: "center";
    readonly whiteSpace: "nowrap";
    readonly h: "$size-small";
    readonly padding: "$space-component-padding-xSmall $space-component-padding-small";
    readonly pl: "$space-component-padding-medium";
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
    readonly hasIcon: {
        readonly pl: "$space-component-padding-small";
    };
    readonly hasPrefix: {
        readonly pl: "$space-component-padding-medium";
    };
    readonly hasAvatar: {
        readonly pl: "$space-component-padding-xSmall";
    };
    readonly isSelected: {
        readonly backgroundColor: "$color-interaction-background-formField";
        readonly borderColor: {
            readonly _: "$color-interaction-border-neutral-normal";
            readonly hover: "$color-interaction-border-neutral-hover";
            readonly active: "$color-interaction-border-neutral-active";
        };
    };
    readonly innerElements: {
        readonly icon: {
            readonly color: "$color-content-secondary";
        };
        readonly actionIcon: {
            readonly color: "$color-action-neutral-normal";
        };
        readonly prefix: {
            readonly text: "$typo-body-medium";
            readonly color: "$color-content-secondary";
        };
        readonly textContainer: {
            readonly display: "inline-flex";
            readonly alignItems: "center";
            readonly gap: "$space-component-gap-xSmall";
        };
        readonly contentContainer: {
            readonly xSmall: {
                readonly display: "inline-flex";
                readonly alignItems: "center";
                readonly gap: "$space-component-gap-xSmall";
            };
            readonly small: {
                readonly display: "inline-flex";
                readonly alignItems: "center";
                readonly gap: "$space-component-gap-small";
            };
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
export declare const selectablePillStyles: {
    defaultConfig: {
        readonly display: "inline-flex";
        readonly justifyContent: "center";
        readonly alignItems: "center";
        readonly textAlign: "center";
        readonly whiteSpace: "nowrap";
        readonly h: "$size-small";
        readonly padding: "$space-component-padding-xSmall $space-component-padding-small";
        readonly pl: "$space-component-padding-medium";
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
        readonly hasIcon: {
            readonly pl: "$space-component-padding-small";
        };
        readonly hasPrefix: {
            readonly pl: "$space-component-padding-medium";
        };
        readonly hasAvatar: {
            readonly pl: "$space-component-padding-xSmall";
        };
        readonly isSelected: {
            readonly backgroundColor: "$color-interaction-background-formField";
            readonly borderColor: {
                readonly _: "$color-interaction-border-neutral-normal";
                readonly hover: "$color-interaction-border-neutral-hover";
                readonly active: "$color-interaction-border-neutral-active";
            };
        };
        readonly innerElements: {
            readonly icon: {
                readonly color: "$color-content-secondary";
            };
            readonly actionIcon: {
                readonly color: "$color-action-neutral-normal";
            };
            readonly prefix: {
                readonly text: "$typo-body-medium";
                readonly color: "$color-content-secondary";
            };
            readonly textContainer: {
                readonly display: "inline-flex";
                readonly alignItems: "center";
                readonly gap: "$space-component-gap-xSmall";
            };
            readonly contentContainer: {
                readonly xSmall: {
                    readonly display: "inline-flex";
                    readonly alignItems: "center";
                    readonly gap: "$space-component-gap-xSmall";
                };
                readonly small: {
                    readonly display: "inline-flex";
                    readonly alignItems: "center";
                    readonly gap: "$space-component-gap-small";
                };
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
