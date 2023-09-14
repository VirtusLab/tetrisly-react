/// <reference types="react" />
import { StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
declare const meta: {
    component: <TVariant extends import("../Button/types/ButtonType.type").ButtonVariant, TAppearance extends import("./IconButtonAppearance.type").IconButtonAppearance<TVariant>>({ intent, variant, appearance, size, icon, dropdownIndicator, state, custom, ...marginProps }: import("./IconButton.props").IconButtonStyleProps<TVariant, TAppearance> & {
        icon: import("../../utility-types/IconName").IconName<20>;
        state?: import("../Button/types/ButtonState.type").ButtonState | undefined;
    } & Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        variant: {
            description: string;
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
        appearance: {
            table: {
                defaultValue: {
                    summary: string;
                };
            };
        };
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
type Story = StoryObj<typeof IconButton>;
export declare const Default: Story;
export declare const Clickable: Story;
