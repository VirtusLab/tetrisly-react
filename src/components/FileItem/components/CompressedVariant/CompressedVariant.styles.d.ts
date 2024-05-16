import { ProgressBarConfig } from '../ProgressBar';
import type { BaseProps } from '../../../../types/BaseProps';
export type CompressedVariantConfig = BaseProps & {
    innerElements?: {
        fileInfo?: BaseProps;
        fileName?: BaseProps;
        fileSize?: BaseProps;
        alertIcon?: BaseProps;
        content?: BaseProps;
        uploadingContent?: BaseProps;
        replaceableContent?: BaseProps;
        alertContent?: BaseProps;
        notExtendedAlert?: BaseProps;
        closeIconButton?: BaseProps;
        progressBar?: ProgressBarConfig;
    };
};
export declare const defaultConfig: {
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
export declare const compressedVariantStyles: {
    defaultConfig: {
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
};
