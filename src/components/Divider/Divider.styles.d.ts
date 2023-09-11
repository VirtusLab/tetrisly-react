import type { DividerOrientation } from './types';
import type { BaseProps } from '../../types/BaseProps';
export type DividerConfig = {
    orientation?: Partial<Record<DividerOrientation, BaseProps>>;
} & BaseProps;
export declare const defaultConfig: {
    backgroundColor: "border-default";
    orientation: {
        horizontal: {
            w: string;
            h: string;
        };
        vertical: {
            w: string;
            h: string;
        };
    };
};
