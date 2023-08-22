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
