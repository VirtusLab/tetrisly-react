/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./CornerDialog.props").CornerDialogProps>;
    tags: string[];
    argTypes: {};
    args: {
        intent: "none";
        title: string;
        content: string;
        actions: undefined;
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
export declare const Decision: Story;
export declare const Confirmation: Story;
export declare const NegativeWithDestructiveButton: Story;
export declare const WarningAndAdditionalAction: Story;
export declare const CustomContent: Story;
