/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./SelectablePill.props").SelectablePillProps>;
    tags: string[];
    argTypes: {};
    args: {
        state: "default";
        text: string;
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
export declare const Disabled: Story;
export declare const Selected: Story;
export declare const Inverted: Story;
export declare const WithIcon: Story;
export declare const DisabledWithIcon: Story;
export declare const WithIconAndPrefix: Story;
export declare const SelectedWithIcon: Story;
export declare const InvertedWithPrefix: Story;
export declare const WithAvatar: Story;
export declare const WithAvatarInitialsAndPrefix: Story;
export declare const SelectedWithPrefix: Story;
