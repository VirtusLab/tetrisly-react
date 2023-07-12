import { ButtonHTMLAttributes } from 'react';

import { StylesBuilderProps } from './stylesBuilder/stylesBuilder.props';
import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonIntent } from './types/ButtonIntent.type';
import { ButtonSize } from './types/ButtonSize.type';
import { ButtonState } from './types/ButtonState.type';
import { ButtonVariant } from './types/ButtonType.type';

export type ButtonProps<
  TVariant extends ButtonVariant = 'default',
  TAppearance extends ButtonAppearance<TVariant> = ButtonAppearance<TVariant>
> = {
  variant?: TVariant;
  appearance?: TAppearance;
  size?: ButtonSize<TVariant>;
  intent?: ButtonIntent<TVariant, TAppearance>;
  label: string;
  state?: ButtonState;
  custom?: StylesBuilderProps<TVariant, TAppearance>['custom'];
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'color'>;
