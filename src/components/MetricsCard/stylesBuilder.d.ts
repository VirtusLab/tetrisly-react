import type { IconPositionType, MetricsCardProps } from './MetricsCard.props';
type StylesBuilderParams = {
    iconPosition: IconPositionType;
    custom: MetricsCardProps['custom'];
};
export declare const stylesBuilder: ({ iconPosition, custom, }: StylesBuilderParams) => {
    circle: {
        w: string;
        h: string;
        padding: string;
        border: string;
        borderColor: "$color-border-neutral-subtle";
        borderRadius: string;
    };
    trend: {};
    icon: {
        display: "flex";
    };
    trendValue: {
        text: "$typo-body-strong-medium";
        display: "flex";
        alignItems: "end";
    };
    referenceDate: {
        display: "block";
        text: "$typo-body-medium";
        color: "$color-content-secondary";
        marginLeft: string;
    };
    trendContainer: {
        flexDirection: "column";
        alignSelf: "flex-start";
        gap: string;
    };
    moreIcon: {
        position: "absolute";
        color: "$color-action-neutral-normal";
        top: string;
        right: string;
    };
    container: {
        flexDirection: "column";
        position: "relative";
        border: string;
        borderColor: "$color-border-defaultA";
        borderRadius: string;
        padding: string;
        display: "flex";
        boxShadow: "$elevation-bottom-200";
        w: string;
    } | {
        flexDirection: "row";
        position: "relative";
        border: string;
        borderColor: "$color-border-defaultA";
        borderRadius: string;
        padding: string;
        display: "flex";
        boxShadow: "$elevation-bottom-200";
        w: string;
    };
};
export {};
