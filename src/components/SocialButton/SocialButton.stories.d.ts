/// <reference types="react" />
import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import("react").FC<{
        label: string;
        platform: "Apple" | "Facebook" | "Figma" | "Github" | "Google" | "X";
        appearance?: import("./SocialButton.styles").SocialButtonAppearance | undefined;
        state?: "disabled" | "loading" | undefined;
        custom?: import("./SocialButton.styles").SocialButtonConfig | undefined;
    } & Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>>;
    tags: string[];
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
export declare const PrimaryApple: Story;
export declare const SecondaryApple: Story;
export declare const PrimaryFacebook: Story;
export declare const SecondaryFacebook: Story;
export declare const PrimaryFigma: Story;
export declare const SecondaryFigma: Story;
export declare const PrimaryGithub: Story;
export declare const SecondaryGithub: Story;
export declare const PrimaryGoogle: Story;
export declare const SecondaryGoogle: Story;
export declare const PrimaryTwitter: Story;
export declare const SecondaryTwitter: Story;
