import type { BaseProps } from '../../types/BaseProps';
export type FileItemConfig = BaseProps & {
    state?: {
        uploading?: BaseProps;
        uploaded?: BaseProps;
        replaceable?: BaseProps;
        alert?: BaseProps;
    };
    inverted?: BaseProps;
    invertedAlert?: BaseProps;
    compressed?: BaseProps;
    extended?: BaseProps;
};
export declare const defaultConfig: {
    readonly display: "flex";
    readonly flexDirection: "column";
    readonly gap: "$space-component-gap-small";
    readonly borderRadius: "$border-radius-large";
    readonly state: {
        readonly uploading: {
            readonly backgroundColor: "$color-interaction-neutral-subtle-normal";
        };
        readonly uploaded: {
            readonly backgroundColor: "$color-interaction-default-subtle-normal";
        };
        readonly replaceable: {
            readonly backgroundColor: "$color-interaction-default-subtle-normal";
        };
        readonly alert: {
            readonly backgroundColor: "$color-interaction-alert-subtle-normal";
        };
    };
    readonly inverted: {
        readonly backgroundColor: "$color-interaction-background-formField";
        readonly borderWidth: "$border-width-small";
        readonly borderStyle: "$border-style-solid";
        readonly borderColor: "$color-interaction-border-neutral-normal";
    };
    readonly invertedAlert: {
        readonly borderColor: "$color-interaction-border-alert";
    };
    readonly compressed: {
        readonly display: "flex";
        readonly flexDirection: "column";
        readonly gap: "$space-component-gap-xSmall";
        readonly px: "$space-component-padding-large";
        readonly py: "$space-component-padding-small";
        readonly innerElements: {
            readonly fileInfo: {
                readonly display: "flex";
                readonly alignItems: "center";
                readonly gap: "$space-component-gap-small";
            };
            readonly fileName: {
                readonly text: "$typo-medium-175";
                readonly color: "$color-content-primary";
            };
            readonly fileSize: {
                readonly text: "$typo-medium-175";
                readonly color: "$color-content-secondary";
            };
            readonly alertIcon: {
                readonly color: "$color-content-negative-secondary";
            };
            readonly content: {
                readonly flexGrow: 1;
                readonly mx: "$space-component-padding-large";
            };
            readonly uploadingContent: {};
            readonly replaceableContent: {
                readonly display: "flex";
                readonly flexDirection: "column";
                readonly alignItems: "flex-end";
            };
            readonly alertContent: {
                readonly display: "flex";
                readonly flexDirection: "column";
                readonly alignItems: "flex-end";
            };
            readonly notExtendedAlert: {
                readonly text: "$typo-body-small";
                readonly color: "$color-content-negative-secondary";
            };
            readonly closeIconButton: {
                readonly display: "flex";
                readonly flexDirection: "column";
                readonly alignItems: "center";
            };
            readonly progressBar: {
                readonly innerElements: {
                    readonly track: {
                        readonly h: "4px";
                        readonly borderRadius: "$border-radius-small";
                    };
                    readonly notInvertedTrack: {
                        readonly backgroundColor: "$color-interaction-inverted-normal";
                    };
                    readonly invertedTrack: {
                        readonly backgroundColor: "$color-interaction-neutral-subtle-normal";
                    };
                    readonly progress: {
                        readonly h: "100%";
                        readonly borderRadius: "$border-radius-small";
                        readonly backgroundColor: "$color-interaction-default-normal";
                    };
                };
            };
        };
    };
    readonly extended: {
        readonly display: "flex";
        readonly flexDirection: "column";
        readonly gap: "$space-component-gap-small";
        readonly padding: "$space-component-padding-large";
        readonly thumbnailWrapper: {
            readonly display: "flex";
            readonly flexDirection: "row";
            readonly gap: "$space-component-gap-large";
        };
        readonly fileDetails: {
            readonly display: "flex";
            readonly flexDirection: "column";
            readonly gap: "$space-component-gap-xSmall";
            readonly flexGrow: 1;
        };
        readonly topDetails: {
            readonly display: "flex";
            readonly justifyContent: "space-between";
        };
        readonly bottomDetails: {
            readonly display: "flex";
            readonly justifyContent: "space-between";
        };
        readonly innerElements: {
            readonly fileThumbnail: {
                readonly paddingTop: "$space-component-padding-xSmall";
            };
            readonly photoThumbnail: {
                readonly paddingTop: "$space-component-padding-small";
            };
            readonly fileDescription: {
                readonly display: "flex";
                readonly gap: "$space-component-gap-small";
                readonly alignItems: "center";
            };
            readonly fileName: {
                readonly text: "$typo-medium-175";
                readonly color: "$color-content-primary";
            };
            readonly fileSize: {
                readonly text: "$typo-medium-175";
                readonly color: "$color-content-secondary";
            };
            readonly timeLeft: {
                readonly text: "$typo-medium-175";
                readonly color: "$color-content-secondary";
            };
            readonly dot: {
                readonly w: "2px";
                readonly h: "2px";
                readonly backgroundColor: "$color-content-secondary";
            };
            readonly uploadedPercentage: {
                readonly text: "$typo-medium-175";
                readonly color: "$color-content-secondary";
            };
            readonly uploadingContent: {};
            readonly replaceableContent: {
                readonly display: "flex";
                readonly flexDirection: "column";
                readonly alignItems: "flex-end";
            };
            readonly alertContent: {
                readonly display: "flex";
                readonly flexDirection: "column";
                readonly alignItems: "flex-end";
            };
            readonly closeIconButton: {
                readonly display: "flex";
                readonly flexDirection: "column";
                readonly alignItems: "center";
            };
            readonly alert: {
                readonly display: "flex";
                readonly gap: "$space-component-gap-small";
                readonly alignItems: "center";
            };
            readonly alertText: {
                readonly display: "flex";
                readonly gap: "$space-component-gap-xSmall";
                readonly text: "$typo-body-small";
                readonly color: "$color-content-negative-secondary";
            };
            readonly alertIcon: {
                readonly color: "$color-content-negative-secondary";
            };
            readonly fileSizeAlert: {
                readonly text: "$typo-body-small";
                readonly color: "$color-content-secondary";
            };
            readonly progressBar: {
                readonly innerElements: {
                    readonly track: {
                        readonly h: "4px";
                        readonly borderRadius: "$border-radius-small";
                    };
                    readonly notInvertedTrack: {
                        readonly backgroundColor: "$color-interaction-inverted-normal";
                    };
                    readonly invertedTrack: {
                        readonly backgroundColor: "$color-interaction-neutral-subtle-normal";
                    };
                    readonly progress: {
                        readonly h: "100%";
                        readonly borderRadius: "$border-radius-small";
                        readonly backgroundColor: "$color-interaction-default-normal";
                    };
                };
            };
        };
    };
};
export declare const fileItemStyles: {
    defaultConfig: {
        readonly display: "flex";
        readonly flexDirection: "column";
        readonly gap: "$space-component-gap-small";
        readonly borderRadius: "$border-radius-large";
        readonly state: {
            readonly uploading: {
                readonly backgroundColor: "$color-interaction-neutral-subtle-normal";
            };
            readonly uploaded: {
                readonly backgroundColor: "$color-interaction-default-subtle-normal";
            };
            readonly replaceable: {
                readonly backgroundColor: "$color-interaction-default-subtle-normal";
            };
            readonly alert: {
                readonly backgroundColor: "$color-interaction-alert-subtle-normal";
            };
        };
        readonly inverted: {
            readonly backgroundColor: "$color-interaction-background-formField";
            readonly borderWidth: "$border-width-small";
            readonly borderStyle: "$border-style-solid";
            readonly borderColor: "$color-interaction-border-neutral-normal";
        };
        readonly invertedAlert: {
            readonly borderColor: "$color-interaction-border-alert";
        };
        readonly compressed: {
            readonly display: "flex";
            readonly flexDirection: "column";
            readonly gap: "$space-component-gap-xSmall";
            readonly px: "$space-component-padding-large";
            readonly py: "$space-component-padding-small";
            readonly innerElements: {
                readonly fileInfo: {
                    readonly display: "flex";
                    readonly alignItems: "center";
                    readonly gap: "$space-component-gap-small";
                };
                readonly fileName: {
                    readonly text: "$typo-medium-175";
                    readonly color: "$color-content-primary";
                };
                readonly fileSize: {
                    readonly text: "$typo-medium-175";
                    readonly color: "$color-content-secondary";
                };
                readonly alertIcon: {
                    readonly color: "$color-content-negative-secondary";
                };
                readonly content: {
                    readonly flexGrow: 1;
                    readonly mx: "$space-component-padding-large";
                };
                readonly uploadingContent: {};
                readonly replaceableContent: {
                    readonly display: "flex";
                    readonly flexDirection: "column";
                    readonly alignItems: "flex-end";
                };
                readonly alertContent: {
                    readonly display: "flex";
                    readonly flexDirection: "column";
                    readonly alignItems: "flex-end";
                };
                readonly notExtendedAlert: {
                    readonly text: "$typo-body-small";
                    readonly color: "$color-content-negative-secondary";
                };
                readonly closeIconButton: {
                    readonly display: "flex";
                    readonly flexDirection: "column";
                    readonly alignItems: "center";
                };
                readonly progressBar: {
                    readonly innerElements: {
                        readonly track: {
                            readonly h: "4px";
                            readonly borderRadius: "$border-radius-small";
                        };
                        readonly notInvertedTrack: {
                            readonly backgroundColor: "$color-interaction-inverted-normal";
                        };
                        readonly invertedTrack: {
                            readonly backgroundColor: "$color-interaction-neutral-subtle-normal";
                        };
                        readonly progress: {
                            readonly h: "100%";
                            readonly borderRadius: "$border-radius-small";
                            readonly backgroundColor: "$color-interaction-default-normal";
                        };
                    };
                };
            };
        };
        readonly extended: {
            readonly display: "flex";
            readonly flexDirection: "column";
            readonly gap: "$space-component-gap-small";
            readonly padding: "$space-component-padding-large";
            readonly thumbnailWrapper: {
                readonly display: "flex";
                readonly flexDirection: "row";
                readonly gap: "$space-component-gap-large";
            };
            readonly fileDetails: {
                readonly display: "flex";
                readonly flexDirection: "column";
                readonly gap: "$space-component-gap-xSmall";
                readonly flexGrow: 1;
            };
            readonly topDetails: {
                readonly display: "flex";
                readonly justifyContent: "space-between";
            };
            readonly bottomDetails: {
                readonly display: "flex";
                readonly justifyContent: "space-between";
            };
            readonly innerElements: {
                readonly fileThumbnail: {
                    readonly paddingTop: "$space-component-padding-xSmall";
                };
                readonly photoThumbnail: {
                    readonly paddingTop: "$space-component-padding-small";
                };
                readonly fileDescription: {
                    readonly display: "flex";
                    readonly gap: "$space-component-gap-small";
                    readonly alignItems: "center";
                };
                readonly fileName: {
                    readonly text: "$typo-medium-175";
                    readonly color: "$color-content-primary";
                };
                readonly fileSize: {
                    readonly text: "$typo-medium-175";
                    readonly color: "$color-content-secondary";
                };
                readonly timeLeft: {
                    readonly text: "$typo-medium-175";
                    readonly color: "$color-content-secondary";
                };
                readonly dot: {
                    readonly w: "2px";
                    readonly h: "2px";
                    readonly backgroundColor: "$color-content-secondary";
                };
                readonly uploadedPercentage: {
                    readonly text: "$typo-medium-175";
                    readonly color: "$color-content-secondary";
                };
                readonly uploadingContent: {};
                readonly replaceableContent: {
                    readonly display: "flex";
                    readonly flexDirection: "column";
                    readonly alignItems: "flex-end";
                };
                readonly alertContent: {
                    readonly display: "flex";
                    readonly flexDirection: "column";
                    readonly alignItems: "flex-end";
                };
                readonly closeIconButton: {
                    readonly display: "flex";
                    readonly flexDirection: "column";
                    readonly alignItems: "center";
                };
                readonly alert: {
                    readonly display: "flex";
                    readonly gap: "$space-component-gap-small";
                    readonly alignItems: "center";
                };
                readonly alertText: {
                    readonly display: "flex";
                    readonly gap: "$space-component-gap-xSmall";
                    readonly text: "$typo-body-small";
                    readonly color: "$color-content-negative-secondary";
                };
                readonly alertIcon: {
                    readonly color: "$color-content-negative-secondary";
                };
                readonly fileSizeAlert: {
                    readonly text: "$typo-body-small";
                    readonly color: "$color-content-secondary";
                };
                readonly progressBar: {
                    readonly innerElements: {
                        readonly track: {
                            readonly h: "4px";
                            readonly borderRadius: "$border-radius-small";
                        };
                        readonly notInvertedTrack: {
                            readonly backgroundColor: "$color-interaction-inverted-normal";
                        };
                        readonly invertedTrack: {
                            readonly backgroundColor: "$color-interaction-neutral-subtle-normal";
                        };
                        readonly progress: {
                            readonly h: "100%";
                            readonly borderRadius: "$border-radius-small";
                            readonly backgroundColor: "$color-interaction-default-normal";
                        };
                    };
                };
            };
        };
    };
};
