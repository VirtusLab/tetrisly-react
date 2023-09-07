/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<import("./Counter.props").CounterProps & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
    args: {
        number: number;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Red: Story;
export declare const Grey: Story;
export declare const Blue: Story;
export declare const Green: Story;
export declare const Orange: Story;
export declare const DefaultHigh: Story;
export declare const RedHigh: Story;
export declare const GreyHigh: Story;
export declare const BlueHigh: Story;
export declare const GreenHigh: Story;
export declare const OrangeHigh: Story;
