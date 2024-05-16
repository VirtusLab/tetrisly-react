import type { BaseProps } from '../../../../types/BaseProps';
export type ProgressBarConfig = BaseProps & {
    innerElements?: {
        track?: BaseProps;
        notInvertedTrack?: BaseProps;
        invertedTrack?: BaseProps;
        progress?: BaseProps;
    };
};
export declare const defaultConfig: {
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
export declare const progressBarStyles: {
    defaultConfig: {
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
