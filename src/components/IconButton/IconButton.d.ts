/// <reference types="react" />
import { IconButtonProps } from './IconButton.props';
import { IconButtonAppearance } from './IconButtonAppearance.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';
import { MarginProps } from '../../types';
export declare const IconButton: <TVariant extends ButtonVariant, TAppearance extends IconButtonAppearance<TVariant>>({ intent, variant, appearance, size, icon, dropdownIndicator, state, custom, ...marginProps }: import("./IconButton.props").IconButtonStyleProps<TVariant, TAppearance> & {
    icon: import("../../utility-types/IconName").IconName<20>;
    state?: import("../Button/types/ButtonState.type").ButtonState | undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled"> & import("@xstyled/system").MarginProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginLeftProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginBottomProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginTopProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginRightProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginXProps<import("@xstyled/system").Theme> & import("@xstyled/system").MarginYProps<import("@xstyled/system").Theme>) => import("react/jsx-runtime").JSX.Element;
