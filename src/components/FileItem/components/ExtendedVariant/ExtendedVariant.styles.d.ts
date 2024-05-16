import { ProgressBarConfig } from '../ProgressBar';
import type { BaseProps } from '../../../../types/BaseProps';
export type ExtendedVariantConfig = BaseProps & {
    thumbnailWrapper?: BaseProps;
    fileDetails?: BaseProps;
    topDetails?: BaseProps;
    bottomDetails?: BaseProps;
    innerElements?: {
        fileThumbnail?: BaseProps;
        photoThumbnail?: BaseProps;
        fileDescription?: BaseProps;
        fileName?: BaseProps;
        fileSize?: BaseProps;
        timeLeft?: BaseProps;
        dot?: BaseProps;
        uploadedPercentage?: BaseProps;
        uploadingContent?: BaseProps;
        replaceableContent?: BaseProps;
        alertContent?: BaseProps;
        closeIconButton?: BaseProps;
        alert?: BaseProps;
        alertText?: BaseProps;
        alertIcon?: BaseProps;
        fileSizeAlert?: BaseProps;
        progressBar?: ProgressBarConfig;
    };
};
export declare const defaultConfig: {
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
export declare const extendedVariantStyles: {
    defaultConfig: {
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
