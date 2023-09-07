import type { StatusDotAppearance } from './types';
import type { BaseProps } from '../../types/BaseProps';
export type StatusDotConfig = {
    appearance?: Partial<Record<StatusDotAppearance, BaseProps>>;
    stroked?: BaseProps;
} & BaseProps;
export declare const defaultConfig: {
    w: string;
    h: string;
    borderRadius: string;
    appearance: {
        red: {
            backgroundColor: "nonSemantic-red-background-strong";
        };
        green: {
            backgroundColor: "nonSemantic-green-background-strong";
        };
        orange: {
            backgroundColor: "nonSemantic-orange-background-strong";
        };
    };
    stroked: {
        ring: string;
        ringColor: "border-inverted";
    };
};
