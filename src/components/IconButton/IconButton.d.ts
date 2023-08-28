/// <reference types="react" />
import { MarginProps } from '@xstyled/styled-components';
import { IconButtonProps } from './IconButton.props';
import { IconButtonAppearance } from './IconButtonAppearance.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';
export declare const IconButton: <TVariant extends ButtonVariant, TAppearance extends IconButtonAppearance<TVariant>>({ intent, variant, appearance, size, icon, dropdownIndicator, state, custom, ...marginProps }: import("./IconButton.props").IconButtonStyleProps<TVariant, TAppearance> & {
    icon: import("../../utility-types/IconName").IconName<20>;
    state?: import("../Button/types/ButtonState.type").ButtonState | undefined;
} & Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled"> & MarginProps<import("@xstyled/system").Theme>) => import("react/jsx-runtime").JSX.Element;
