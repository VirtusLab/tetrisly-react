/// <reference types="react" />
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Loader.props").LoaderProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultCircle: Story;
export declare const DefaultBar: Story;
export declare const ProgressCircle: () => import("react/jsx-runtime").JSX.Element;
export declare const ProgressBar: () => import("react/jsx-runtime").JSX.Element;
export declare const White: Story;
export declare const Inverted: Story;
export declare const Greyscale: Story;
