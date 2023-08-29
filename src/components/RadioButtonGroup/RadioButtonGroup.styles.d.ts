import { BaseProps } from '../../types/BaseProps';
export type RadioButtonGroupConfig = {
    innerElements: {
        radioButtonContainer: BaseProps;
    };
} & BaseProps;
export declare const config: {
    display: "flex";
    flexDirection: "column";
    gap: string;
    innerElements: {
        radioButtonContainer: {
            display: "grid";
            gap: string;
        };
    };
};
