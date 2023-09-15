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

export const getButtonAppearances = <TVariant extends ButtonVariant>(
  variant: TVariant,
): ButtonAppearance<TVariant> => {
  if (variant === 'default')
    return [
      'primary',
      'secondary',
      'inverted',
    ] as unknown as ButtonAppearance<TVariant>;
  return [
    'primary',
    'secondary',
    'inverted',
    'reverseInverted',
  ] as unknown as ButtonAppearance<TVariant>;
};
