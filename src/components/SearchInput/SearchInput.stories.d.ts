/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: import("react").FC<Omit<import("../TextInput").TextInputProps, "type" | "state" | "beforeComponent" | "afterComponent"> & {
        state?: "disabled" | undefined;
        afterComponent?: import("../TextInput").TextInputProps.InnerComponents.IconButton | import("../TextInput").TextInputProps.InnerComponents.Dropdown | undefined;
    } & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme>>;
    tags: string[];
    argTypes: {};
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
export declare const Filled: Story;
export declare const Disabled: Story;
export declare const Dropdown: Story;
export declare const Icon: Story;
