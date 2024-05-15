/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./BooleanPill.props").BooleanPillProps>;
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
export declare const DefaultWithAvatar: Story;
export declare const Disabled: Story;
export declare const Selected: Story;
export declare const DisabledAndSelected: Story;
export declare const SelectedWithAvatar: Story;
