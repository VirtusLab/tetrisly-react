import type { StatusDotAppearance } from './types';
import type { BaseProps } from '../../types/BaseProps';
export type StatusDotConfig = {
    appearance?: Partial<Record<StatusDotAppearance, BaseProps>>;
    hasStroke?: BaseProps;
} & BaseProps;
export declare const defaultConfig: {
    w: string;
    h: string;
    borderRadius: string;
    appearance: {
        red: {
            backgroundColor: "$color-nonSemantic-red-background-strong";
        };
        green: {
            backgroundColor: "$color-nonSemantic-green-background-strong";
        };
        orange: {
            backgroundColor: "$color-nonSemantic-orange-background-strong";
        };
    };
    hasStroke: {
        ring: string;
        ringColor: "$color-border-inverted";
    };
};
