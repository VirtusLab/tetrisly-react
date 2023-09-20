/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./InlineBanner.props").InlineBannerProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {
        title: string;
        description: string;
        action: [{
            label: string;
            onClick: import("@storybook/addon-actions").HandlerFunction;
        }, {
            label: string;
            onClick: import("@storybook/addon-actions").HandlerFunction;
        }];
        onCloseClick: import("@storybook/addon-actions").HandlerFunction;
    };
    parameters: {
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
export declare const Informative: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Negative: Story;
