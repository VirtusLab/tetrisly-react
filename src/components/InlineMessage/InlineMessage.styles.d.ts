import { InlineMessageIntent } from './InlineMessageIntent.type';
import { BaseProps } from '../../types/BaseProps';
import { IconName } from '../../utility-types/IconName';
export type InlineMessageConfig = {
    innerElements?: {
        title?: {
            intent?: Partial<Record<InlineMessageIntent, BaseProps>>;
        } & BaseProps;
        iconContainer?: {
            intent?: Partial<Record<InlineMessageIntent, BaseProps>>;
        } & BaseProps;
        description?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    display: "flex";
    alignItems: "flex-start";
    gap: string;
    text: "$typo-body-medium";
    innerElements: {
        title: {
            marginRight: string;
            intent: {
                informative: {
                    color: "$color-content-informative-primary";
                };
                success: {
                    color: "$color-content-positive-primary";
                };
                warning: {
                    color: "$color-content-warning-primary";
                };
                negative: {
                    color: "$color-content-negative-primary";
                };
            };
        };
        iconContainer: {
            display: "flex";
            alignItems: "center";
            minHeight: string;
            intent: {
                informative: {
                    color: "$color-content-informative-secondary";
                };
                success: {
                    color: "$color-content-positive-secondary";
                };
                warning: {
                    color: "$color-content-warning-secondary";
                };
                negative: {
                    color: "$color-content-negative-secondary";
                };
            };
        };
        description: {
            color: "$color-content-secondary";
            display: "inline-block";
        };
    };
};
export declare const resolveIconName: (intent: InlineMessageIntent) => IconName<20>;
