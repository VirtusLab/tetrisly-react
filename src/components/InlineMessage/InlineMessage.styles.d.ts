import { InlineMessageIntent } from './InlineMessageIntent.type';
import { BaseProps } from '../../types/BaseProps';
import { IconName } from '../../utility-types/IconName';
export type InlineMessageConfig = {
    innerElements: {
        title: {
            intent: Record<InlineMessageIntent, BaseProps>;
        } & BaseProps;
        icon: {
            intent: Record<InlineMessageIntent, {
                name: IconName<20>;
            }>;
        };
        iconContainer: {
            intent: Record<InlineMessageIntent, BaseProps>;
        } & BaseProps;
        description: BaseProps;
    };
} & BaseProps;
export declare const config: {
    readonly display: "flex";
    readonly alignItems: "flex-start";
    readonly gap: "component-gap-small";
    readonly text: "medium-175";
    readonly innerElements: {
        readonly title: {
            readonly marginRight: "component-gap-small";
            readonly intent: {
                readonly informative: {
                    readonly color: "content-informative-primary";
                };
                readonly success: {
                    readonly color: "content-positive-primary";
                };
                readonly warning: {
                    readonly color: "content-warning-primary";
                };
                readonly negative: {
                    readonly color: "content-negative-primary";
                };
            };
        };
        readonly icon: {
            readonly intent: {
                readonly informative: {
                    readonly name: "20-info-fill";
                };
                readonly success: {
                    readonly name: "20-check-circle-fill";
                };
                readonly warning: {
                    readonly name: "20-warning-fill";
                };
                readonly negative: {
                    readonly name: "20-alert-fill";
                };
            };
        };
        readonly iconContainer: {
            readonly display: "flex";
            readonly alignItems: "center";
            readonly minHeight: "xSmall";
            readonly intent: {
                readonly informative: {
                    readonly color: "content-informative-secondary";
                };
                readonly success: {
                    readonly color: "content-positive-secondary";
                };
                readonly warning: {
                    readonly color: "content-warning-secondary";
                };
                readonly negative: {
                    readonly color: "content-negative-secondary";
                };
            };
        };
        readonly description: {
            readonly color: "content-secondary";
            readonly display: "inline-block";
        };
    };
};
