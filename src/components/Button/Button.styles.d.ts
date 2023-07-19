export declare const config: {
    readonly default: {
        readonly boxShadow: "bottom-100";
        readonly appearance: {
            readonly primary: {
                readonly color: "action-inverted-normal";
                readonly intent: {
                    readonly none: {
                        readonly backgroundColor: {
                            readonly _: "action-primary-normal";
                            readonly hover: "action-primary-hover";
                            readonly active: "action-primary-active";
                            readonly selected: "action-primary-selected";
                        };
                    };
                    readonly success: {
                        readonly backgroundColor: {
                            readonly _: "action-success-normal";
                            readonly hover: "action-success-hover";
                            readonly active: "action-success-active";
                            readonly selected: "action-success-selected";
                        };
                    };
                    readonly destructive: {
                        readonly backgroundColor: {
                            readonly _: "action-destructive-normal";
                            readonly hover: "action-destructive-hover";
                            readonly active: "action-destructive-active";
                            readonly selected: "action-destructive-selected";
                        };
                    };
                };
            };
            readonly secondary: {
                readonly backgroundColor: "action-inverted-normal";
                readonly ringInset: true;
                readonly ring: "100";
                readonly ringColor: {
                    readonly _: "action-outline-normal";
                    readonly hover: "action-outline-hover";
                    readonly active: "action-outline-active";
                    readonly selected: "action-outline-selected";
                };
                readonly intent: {
                    readonly none: {
                        readonly color: {
                            readonly _: "action-neutral-normal";
                            readonly hover: "action-neutral-hover";
                            readonly active: "action-neutral-active";
                            readonly selected: "action-neutral-selected";
                        };
                    };
                    readonly success: {
                        readonly color: {
                            readonly _: "action-success-normal";
                            readonly hover: "action-success-hover";
                            readonly active: "action-success-active";
                            readonly selected: "action-success-selected";
                        };
                    };
                    readonly destructive: {
                        readonly color: {
                            readonly _: "action-destructive-normal";
                            readonly hover: "action-destructive-hover";
                            readonly active: "action-destructive-active";
                            readonly selected: "action-destructive-selected";
                        };
                    };
                };
            };
            readonly inverted: {
                readonly intent: {
                    readonly none: {
                        readonly backgroundColor: {
                            readonly _: "action-inverted-normal";
                            readonly hover: "action-inverted-hover";
                            readonly active: "action-inverted-active";
                            readonly selected: "action-inverted-selected";
                        };
                        readonly color: {
                            readonly _: "action-neutral-normal";
                            readonly hover: "action-neutral-hover";
                            readonly active: "action-neutral-active";
                            readonly selected: "action-neutral-selected";
                        };
                    };
                };
            };
        };
        readonly size: {
            readonly small: {
                readonly pl: "100";
                readonly pr: "150";
                readonly h: "small";
                readonly text: "body-medium";
            };
            readonly medium: {
                readonly pl: "150";
                readonly pr: "200";
                readonly h: "medium";
                readonly text: "body-medium";
            };
            readonly large: {
                readonly pl: "150";
                readonly pr: "200";
                readonly h: "large";
                readonly text: "body-large";
            };
        };
        readonly display: "inline-flex";
        readonly gap: "100";
        readonly justifyContent: "center";
        readonly alignItems: "center";
        readonly borderRadius: "medium";
        readonly textAlign: "center";
        readonly whiteSpace: "nowrap";
        readonly opacity: {
            readonly disabled: "disabled";
        };
        readonly outlineColor: {
            readonly focus: "interaction-focus-default";
        };
        readonly outlineWidth: {
            readonly focus: "focus";
        };
        readonly outlineOffset: 2;
        readonly pointerEvents: {
            readonly loading: "none";
            readonly disabled: "none";
        };
        readonly transition: true;
        readonly transitionDuration: 200;
    };
    readonly ghost: {
        readonly backgroundColor: {
            readonly _: "transparent";
            readonly hover: "action-ghost-hover";
            readonly active: "action-ghost-active";
            readonly selected: "action-ghost-selected";
        };
        readonly appearance: {
            readonly primary: {
                readonly intent: {
                    readonly none: {
                        readonly color: {
                            readonly _: "action-primary-normal";
                            readonly hover: "action-primary-hover";
                            readonly active: "action-primary-active";
                            readonly selected: "action-primary-selected";
                        };
                    };
                    readonly success: {
                        readonly color: {
                            readonly _: "action-success-normal";
                            readonly hover: "action-success-hover";
                            readonly active: "action-success-active";
                            readonly selected: "action-success-selected";
                        };
                    };
                    readonly destructive: {
                        readonly color: {
                            readonly _: "action-destructive-normal";
                            readonly hover: "action-destructive-hover";
                            readonly active: "action-destructive-active";
                            readonly selected: "action-destructive-selected";
                        };
                    };
                };
            };
            readonly secondary: {
                readonly intent: {
                    readonly none: {
                        readonly color: {
                            readonly _: "action-neutral-normal";
                            readonly hover: "action-neutral-hover";
                            readonly active: "action-neutral-active";
                            readonly selected: "action-neutral-selected";
                        };
                    };
                };
            };
            readonly inverted: {
                readonly intent: {
                    readonly none: {
                        readonly backgroundColor: {
                            readonly _: "action-ghost-normal";
                            readonly hover: "action-ghost-hover";
                            readonly active: "action-ghost-active";
                            readonly selected: "action-ghost-selected";
                        };
                        readonly color: {
                            readonly _: "action-inverted-normal";
                            readonly hover: "action-inverted-hover";
                            readonly active: "action-inverted-active";
                            readonly selected: "action-inverted-selected";
                        };
                    };
                };
            };
            readonly reverseInverted: {
                readonly intent: {
                    readonly none: {
                        readonly color: {
                            readonly _: "action-reverseInverted-normal";
                            readonly hover: "action-reverseInverted-hover";
                            readonly active: "action-reverseInverted-active";
                            readonly selected: "action-reverseInverted-selected";
                        };
                    };
                };
            };
        };
        readonly size: {
            readonly small: {
                readonly pl: "100";
                readonly pr: "150";
                readonly h: "small";
                readonly text: "body-medium";
            };
            readonly medium: {
                readonly pl: "150";
                readonly pr: "200";
                readonly h: "medium";
                readonly text: "body-medium";
            };
            readonly large: {
                readonly pl: "150";
                readonly pr: "200";
                readonly h: "large";
                readonly text: "body-large";
            };
        };
        readonly display: "inline-flex";
        readonly gap: "100";
        readonly justifyContent: "center";
        readonly alignItems: "center";
        readonly borderRadius: "medium";
        readonly textAlign: "center";
        readonly whiteSpace: "nowrap";
        readonly opacity: {
            readonly disabled: "disabled";
        };
        readonly outlineColor: {
            readonly focus: "interaction-focus-default";
        };
        readonly outlineWidth: {
            readonly focus: "focus";
        };
        readonly outlineOffset: 2;
        readonly pointerEvents: {
            readonly loading: "none";
            readonly disabled: "none";
        };
        readonly transition: true;
        readonly transitionDuration: 200;
    };
    readonly bare: {
        readonly p: 0;
        readonly backgroundColor: "transparent";
        readonly appearance: {
            readonly primary: {
                readonly intent: {
                    readonly none: {
                        readonly color: {
                            readonly _: "action-primary-normal";
                            readonly hover: "action-primary-hover";
                            readonly active: "action-primary-active";
                            readonly selected: "action-primary-selected";
                        };
                    };
                    readonly success: {
                        readonly color: {
                            readonly _: "action-success-normal";
                            readonly hover: "action-success-hover";
                            readonly active: "action-success-active";
                            readonly selected: "action-success-selected";
                        };
                    };
                    readonly destructive: {
                        readonly color: {
                            readonly _: "action-destructive-normal";
                            readonly hover: "action-destructive-hover";
                            readonly active: "action-destructive-active";
                            readonly selected: "action-destructive-selected";
                        };
                    };
                };
            };
            readonly secondary: {
                readonly intent: {
                    readonly none: {
                        readonly color: {
                            readonly _: "action-neutral-normal";
                            readonly hover: "action-neutral-hover";
                            readonly active: "action-neutral-active";
                            readonly selected: "action-neutral-selected";
                        };
                    };
                };
            };
            readonly inverted: {
                readonly intent: {
                    readonly none: {
                        readonly color: {
                            readonly _: "action-inverted-normal";
                            readonly hover: "action-inverted-hover";
                            readonly active: "action-inverted-active";
                            readonly selected: "action-inverted-selected";
                        };
                    };
                };
                readonly textDecoration: "underline";
            };
            readonly reverseInverted: {
                readonly intent: {
                    readonly none: {
                        readonly color: {
                            readonly _: "action-reverseInverted-normal";
                            readonly hover: "action-reverseInverted-hover";
                            readonly active: "action-reverseInverted-active";
                            readonly selected: "action-reverseInverted-selected";
                        };
                    };
                };
                readonly textDecoration: "underline";
            };
        };
        readonly size: {
            readonly medium: {
                readonly text: "body-medium";
            };
            readonly large: {
                readonly text: "body-large";
            };
        };
        readonly display: "inline-flex";
        readonly gap: "100";
        readonly justifyContent: "center";
        readonly alignItems: "center";
        readonly borderRadius: "medium";
        readonly textAlign: "center";
        readonly whiteSpace: "nowrap";
        readonly opacity: {
            readonly disabled: "disabled";
        };
        readonly outlineColor: {
            readonly focus: "interaction-focus-default";
        };
        readonly outlineWidth: {
            readonly focus: "focus";
        };
        readonly outlineOffset: 2;
        readonly pointerEvents: {
            readonly loading: "none";
            readonly disabled: "none";
        };
        readonly transition: true;
        readonly transitionDuration: 200;
    };
};
