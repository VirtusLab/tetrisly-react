import { ButtonVariant } from '../Button/types/ButtonType.type';

export type IconButtonSize<TVariant extends ButtonVariant> =
  | 'medium'
  | (TVariant extends 'bare' ? never : 'small' | 'large');
