import type { TrendType } from './InlineMetrics.props';
import type { BaseProps } from '../../types/BaseProps';
export type InlineMetricsConfig = {
    innerElements: {
        label?: BaseProps;
        metric?: BaseProps;
        trendContainer?: BaseProps;
        trend?: {
            trend?: Partial<Record<TrendType, BaseProps>>;
        } & BaseProps;
        icon?: BaseProps;
        trendValue?: BaseProps;
        referenceDate?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    w: string;
    h: string;
    display: "flex";
    flexDirection: "column";
    gap: string;
    innerElements: {
        trendContainer: {
            display: "flex";
            color: "$color-content-primary";
            gap: string;
        };
        label: {
            color: "$color-content-secondary";
            text: "$typo-body-medium";
        };
        metric: {
            text: "$typo-header-4xLarge";
            color: "$color-content-primary";
        };
        trend: {
            gap: string;
            padding: string;
            display: "flex";
            alignItems: "center";
            trend: {
                None: {};
                Positive: {
                    color: "$color-content-positive-secondary";
                };
                Negative: {
                    color: "$color-content-negative-secondary";
                };
            };
        };
        icon: {
            display: "flex";
        };
        trendValue: {
            text: "$typo-body-strong-medium";
            display: "flex";
            alignItems: "end";
        };
        referenceDate: {
            display: "none";
        };
    };
};
export declare const inlineMetricsStyles: {
    defaultConfig: {
        w: string;
        h: string;
        display: "flex";
        flexDirection: "column";
        gap: string;
        innerElements: {
            trendContainer: {
                display: "flex";
                color: "$color-content-primary";
                gap: string;
            };
            label: {
                color: "$color-content-secondary";
                text: "$typo-body-medium";
            };
            metric: {
                text: "$typo-header-4xLarge";
                color: "$color-content-primary";
            };
            trend: {
                gap: string;
                padding: string;
                display: "flex";
                alignItems: "center";
                trend: {
                    None: {};
                    Positive: {
                        color: "$color-content-positive-secondary";
                    };
                    Negative: {
                        color: "$color-content-negative-secondary";
                    };
                };
            };
            icon: {
                display: "flex";
            };
            trendValue: {
                text: "$typo-body-strong-medium";
                display: "flex";
                alignItems: "end";
            };
            referenceDate: {
                display: "none";
            };
        };
    };
};
export declare const resolveIconName: (trend: TrendType) => "20-minus" | "20-trend-down" | "20-trend-up";
