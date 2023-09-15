import { ButtonVariant } from './ButtonType.type';

export type ButtonSize<TVariant extends ButtonVariant> = TVariant extends 'bare'
  ? 'medium' | 'large'
  : 'small' | 'medium' | 'large';

export const getButtonSizes = <TVariant extends ButtonVariant>(
  variant: TVariant,
): ButtonSize<TVariant> => {
  if (variant === 'bare') {
    return ['medium', 'large'] as unknown as ButtonSize<TVariant>;
  }

  return ['small', 'medium', 'large'] as unknown as ButtonSize<TVariant>;
};
