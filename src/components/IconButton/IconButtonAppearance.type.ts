import { ButtonVariant } from '../Button/types/ButtonType.type';

export type IconButtonAppearance<
  TVariant extends ButtonVariant = ButtonVariant,
> =
  | 'primary'
  | 'inverted'
  | (TVariant extends 'default' ? never : 'reverseInverted');
