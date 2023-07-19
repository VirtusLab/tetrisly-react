import { ButtonVariant } from './ButtonType.type';

type Appearance = 'primary' | 'secondary' | 'inverted' | 'reverseInverted';

export type ButtonAppearance<TVariant extends ButtonVariant> =
  TVariant extends 'default'
    ? Exclude<Appearance, 'reverseInverted'>
    : TVariant extends 'ghost'
    ? Appearance
    : TVariant extends 'bare'
    ? Appearance
    : never;
