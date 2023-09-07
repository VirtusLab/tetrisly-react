import { SystemProps } from '@xstyled/styled-components';
import { DividerOrientation } from './DividerOrientation.type';
import { BaseProps } from '../../types/BaseProps';
export type DividerConfig = {
    orientation: Record<DividerOrientation, SystemProps>;
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
