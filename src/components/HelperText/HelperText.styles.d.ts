import { SystemProps } from '@xstyled/styled-components';
import { HelperTextIntent } from './HelperTextIntent.type';
import { BaseProps } from '../../types/BaseProps';
import { IconName } from '../../utility-types/IconName';
export type HelperTextConfig = {
    intent: Record<HelperTextIntent, SystemProps>;
    icon: Record<HelperTextIntent, SystemProps & {
        name: IconName<16>;
    }>;
    iconContainer: SystemProps;
} & BaseProps;
export declare const config: {
    display: "flex";
    alignItems: "flex-start";
    gap: string;
    text: "medium-150";
    intent: {
        none: {
            color: "content-secondary";
        };
        alert: {
            color: "content-negative-secondary";
        };
        success: {
            color: "content-positive-secondary";
        };
    };
    icon: {
        none: {
            name: "16-info";
        };
        alert: {
            name: "16-alert-full";
        };
        success: {
            name: "16-check";
        };
    };
    iconContainer: {
        display: "flex";
        alignItems: "center";
        minHeight: string;
    };
};
