import type { IconPositionType } from './MetricsCard.props';
import type { BaseProps } from '../../types/BaseProps';
export type MetricsCardConfig = {
    iconPosition?: Record<IconPositionType, BaseProps>;
    innerElements: {
        trendContainer?: BaseProps;
        circle?: BaseProps;
        referenceDate?: BaseProps;
        trend?: BaseProps;
        icon?: BaseProps;
        trendValue?: BaseProps;
        moreIcon?: BaseProps;
    };
} & BaseProps;
export declare const defaultConfig: {
    position: "relative";
    border: string;
    borderColor: "$color-border-defaultA";
    borderRadius: string;
    padding: string;
    display: "flex";
    boxShadow: "$elevation-bottom-200";
    w: string;
    iconPosition: {
        Top: {
            flexDirection: "column";
        };
        Left: {
            flexDirection: "row";
        };
    };
    innerElements: {
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
    };
};
export declare const metricsCardStyles: {
    defaultConfig: {
        position: "relative";
        border: string;
        borderColor: "$color-border-defaultA";
        borderRadius: string;
        padding: string;
        display: "flex";
        boxShadow: "$elevation-bottom-200";
        w: string;
        iconPosition: {
            Top: {
                flexDirection: "column";
            };
            Left: {
                flexDirection: "row";
            };
        };
        innerElements: {
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
        };
    };
};
