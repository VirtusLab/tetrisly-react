/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Card.props").CardProps>;
    tags: string[];
    argTypes: {};
    args: {
        children: import("react/jsx-runtime").JSX.Element;
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
export declare const Content: Story;
export declare const Header: Story;
export declare const HeaderDescription: Story;
export declare const HeaderIcon: Story;
export declare const HeaderAvatar: Story;
export declare const HeaderActions: Story;
export declare const Footer: Story;
