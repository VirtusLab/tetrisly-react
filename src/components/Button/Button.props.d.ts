import { ButtonHTMLAttributes } from 'react';
import { StylesBuilderProps } from './stylesBuilder/stylesBuilder.props';
import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonIntent } from './types/ButtonIntent.type';
import { ButtonSize } from './types/ButtonSize.type';
import { ButtonState } from './types/ButtonState.type';
import { ButtonVariant } from './types/ButtonType.type';
import { IconName } from '../../utility-types/IconName';
import { Or } from '../../utility-types/Or';
export type ButtonProps<TVariant extends ButtonVariant = 'default', TAppearance extends ButtonAppearance<TVariant> = ButtonAppearance<TVariant>> = {
    variant?: TVariant;
    appearance?: TAppearance;
    size?: ButtonSize<TVariant>;
    intent?: ButtonIntent<TVariant, TAppearance>;
    label: string;
    state?: ButtonState;
    custom?: StylesBuilderProps<TVariant, TAppearance>['custom'];
    beforeIcon?: IconName<20>;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'color'> & Or<{
    afterIcon?: IconName<20>;
}, {
    dropdownIndicator?: boolean;
}>;
