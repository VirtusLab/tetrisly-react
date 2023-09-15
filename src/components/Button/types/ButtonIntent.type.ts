import { ButtonAppearance } from './ButtonAppearance.type';
import { ButtonVariant } from './ButtonType.type';

type Intent = 'none' | 'success' | 'destructive';

export type ButtonIntent<
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>,
> = TVariant extends 'default'
  ? TAppearance extends 'primary'
    ? Intent
    : TAppearance extends 'secondary'
    ? Intent
    : TAppearance extends 'inverted'
    ? 'none'
    : never
  : TVariant extends 'ghost'
  ? TAppearance extends 'primary'
    ? Intent
    : TAppearance extends 'secondary'
    ? 'none'
    : TAppearance extends 'inverted'
    ? 'none'
    : TAppearance extends 'reverseInverted'
    ? 'none'
    : never
  : TVariant extends 'bare'
  ? TAppearance extends 'primary'
    ? Intent
    : TAppearance extends 'secondary'
    ? 'none'
    : TAppearance extends 'inverted'
    ? 'none'
    : TAppearance extends 'reverseInverted'
    ? 'none'
    : never
  : never;

export const getButtonIntents = <
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>,
>(
  variant: TVariant,
  appearance: TAppearance,
): ButtonIntent<TVariant, TAppearance> => {
  const full = ['none', 'success', 'negative'] as unknown as ButtonIntent<
    TVariant,
    TAppearance
  >;
  const none = ['none'] as unknown as ButtonIntent<TVariant, TAppearance>;
  if (appearance === 'primary') return full;
  if (appearance === 'secondary') {
    if (variant === 'default') return full;
    return none;
  }
  if (appearance === 'inverted' || appearance === 'reverseInverted')
    return none;
  return full;
};
