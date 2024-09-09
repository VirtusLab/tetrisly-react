/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        iconPosition?: import("./MetricsCard.props").IconPositionType | undefined;
        hasTrend?: boolean | undefined;
        hasIcon?: boolean | undefined;
        hasMoreIcon?: boolean | undefined;
        custom?: import("./MetricsCard.styles").MetricsCardConfig | undefined;
    } & Omit<import("../InlineMetrics").InlineMetricsProps, "custom"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {};
    parameters: {
        backgrounds: {};
        docs: {
            description: {
                component: string;
            };
            page: () => import("react/jsx-runtime").JSX.Element;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const IconPositionLeft: Story;
