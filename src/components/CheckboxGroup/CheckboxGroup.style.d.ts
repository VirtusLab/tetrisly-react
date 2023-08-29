import { SystemProps } from '@xstyled/styled-components';
import { BaseProps } from '../../types/BaseProps';
export type CheckboxGroupConfig = {
    innerElements: {
        checkboxContainer: SystemProps;
    };
} & BaseProps;
export declare const config: {
    display: "flex";
    flexDirection: "column";
    gap: string;
    innerElements: {
        checkboxContainer: {
            display: "grid";
            gap: string;
        };
    };
};
