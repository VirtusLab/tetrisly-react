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
    text: "medium-175";
    innerElements: {
        title: {
            marginRight: string;
            intent: {
                informative: {
                    color: "content-informative-primary";
                };
                success: {
                    color: "content-positive-primary";
                };
                warning: {
                    color: "content-warning-primary";
                };
                negative: {
                    color: "content-negative-primary";
                };
            };
        };
        iconContainer: {
            display: "flex";
            alignItems: "center";
            minHeight: string;
            intent: {
                informative: {
                    color: "content-informative-secondary";
                };
                success: {
                    color: "content-positive-secondary";
                };
                warning: {
                    color: "content-warning-secondary";
                };
                negative: {
                    color: "content-negative-secondary";
                };
            };
        };
        description: {
            color: "content-secondary";
            display: "inline-block";
        };
    };
};
export declare const resolveIconName: (intent: InlineMessageIntent) => IconName<20>;
