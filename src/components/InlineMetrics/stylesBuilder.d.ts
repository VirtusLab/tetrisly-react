import { InlineMetricsProps, TrendType } from './InlineMetrics.props';
type StylesBuilderParams = {
    trend: TrendType;
    custom: InlineMetricsProps['custom'];
};
export declare const stylesBuilder: ({ trend, custom }: StylesBuilderParams) => {
    trend: {
        gap: string;
        padding: string;
        display: "flex";
        alignItems: "center";
        alignSelf: "flex-end";
    } | {
        gap: string;
        padding: string;
        display: "flex";
        alignItems: "center";
        alignSelf: "flex-end";
        color: "$color-content-positive-secondary";
    } | {
        gap: string;
        padding: string;
        display: "flex";
        alignItems: "center";
        alignSelf: "flex-end";
        color: "$color-content-negative-secondary";
    };
    trendContainer: {
        display: "flex";
        color: "$color-content-primary";
        gap: string;
    };
    label: {
        color: "$color-content-secondary";
        text: "$typo-body-medium";
        marginBottom: string;
    };
    metric: {
        text: "$typo-header-4xLarge";
        color: "$color-content-primary";
    };
    icon: {
        display: "flex";
    };
    trendValue: {
        text: "$typo-body-strong-medium";
        display: "flex";
        alignItems: "end";
    };
    container: {
        w: string;
        h: string;
        display: "flex";
        flexDirection: "column";
    };
};
export {};
