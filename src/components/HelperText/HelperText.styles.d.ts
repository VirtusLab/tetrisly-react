import { HelperTextIntent } from './HelperTextIntent.type';
import { BaseProps } from '../../types/BaseProps';
import { IconName } from '../../utility-types/IconName';
export type HelperTextConfig = {
    intent?: Partial<Record<HelperTextIntent, BaseProps>>;
    innerElements?: {
        iconContainer?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
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
    innerElements: {
        iconContainer: {
            display: "flex";
            alignItems: "center";
            minHeight: string;
        };
    };
};
export declare const resolveIconName: (intent: HelperTextIntent) => IconName<16>;
