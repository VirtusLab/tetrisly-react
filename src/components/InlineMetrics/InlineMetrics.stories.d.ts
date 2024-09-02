/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./InlineMetrics.props").InlineMetricsProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme>>;
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
