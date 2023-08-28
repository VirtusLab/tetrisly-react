import { ButtonHTMLAttributes } from 'react';
import { IconButtonConfig } from './IconButton.styles';
import { IconButtonAppearance } from './IconButtonAppearance.type';
import { IconButtonIntent } from './IconButtonIntent.type';
import { IconButtonSize } from './IconButtonSize.type';
import { ButtonState } from '../Button/types/ButtonState.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';
import { DeepPartial } from '../../utility-types/DeepPartial';
import { IconName } from '../../utility-types/IconName';
export type IconButtonStyleProps<TVariant extends ButtonVariant = ButtonVariant, TAppearance extends IconButtonAppearance<TVariant> = IconButtonAppearance<TVariant>> = {
    variant?: TVariant;
    appearance?: TAppearance;
    intent?: IconButtonIntent<TAppearance>;
    size?: IconButtonSize<TVariant>;
    dropdownIndicator?: boolean;
    custom?: DeepPartial<IconButtonConfig>;
};
export type IconButtonProps<TVariant extends ButtonVariant = ButtonVariant, TAppearance extends IconButtonAppearance<TVariant> = IconButtonAppearance<TVariant>> = IconButtonStyleProps<TVariant, TAppearance> & {
    icon: IconName<20>;
    state?: ButtonState;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'color'>;
