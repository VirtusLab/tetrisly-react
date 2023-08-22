import { IconButtonAppearance } from './IconButtonAppearance.type';
import { IconButtonIntent } from './IconButtonIntent.type';
import { IconButtonSize } from './IconButtonSize.type';
import { ButtonVariant } from '../Button/types/ButtonType.type';

export type IconButtonProps<
  TVariant extends ButtonVariant,
  TAppearance extends IconButtonAppearance<TVariant>,
> = {
  variant?: TVariant;
  appearance?: TAppearance;
  intent?: IconButtonIntent<TAppearance>;
  size?: IconButtonSize<TVariant>;
};
