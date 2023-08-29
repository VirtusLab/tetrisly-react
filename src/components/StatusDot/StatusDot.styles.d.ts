import { SystemProps } from '@xstyled/styled-components';
import { StatusDotAppearance } from './StatusDotAppearance.type';
import { BaseProps } from '../../types/BaseProps';
export type StatusDotConfig = {
    appearance: Record<StatusDotAppearance, SystemProps>;
    stroked: SystemProps;
} & BaseProps;
export declare const config: {
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
