import { ButtonVariant } from './ButtonType.type';

export type ButtonSize<TVariant extends ButtonVariant> = TVariant extends 'bare'
  ? 'medium' | 'large'
  : 'small' | 'medium' | 'large';
