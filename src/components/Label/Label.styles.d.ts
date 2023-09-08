import { SystemProps } from '@xstyled/styled-components';
import { Theme } from '../../theme';
import { BaseProps } from '../../types/BaseProps';
export type LabelConfig = BaseProps & TooltipConfig & OptionalConfig;
type TooltipConfig = {
    tooltip?: SystemProps<Theme>;
};
type OptionalConfig = {
    optional?: SystemProps<Theme>;
};
export declare const defaultConfig: {
    text: "medium-175";
    color: "content-primary";
    display: "flex";
    alignItems: "flex-start";
    gap: string;
    tooltip: {
        color: "content-secondary";
        display: "flex";
        alignItems: "center";
        minHeight: string;
    };
    optional: {
        color: "content-tertiary";
    };
};
export {};
