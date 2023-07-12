import { ButtonAppearance } from './ButtonAppearance.type';
import { ButtonVariant } from './ButtonType.type';
import { Equal, Expect } from '../../../utility-types/testing';

type Intent = 'none' | 'success' | 'destructive';

export type ButtonIntent<
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>
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

// test
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Cases = [
  // Default
  Expect<
    Equal<
      ButtonIntent<'default', 'primary'>,
      'none' | 'success' | 'destructive'
    >
  >,
  Expect<
    Equal<
      ButtonIntent<'default', 'secondary'>,
      'none' | 'success' | 'destructive'
    >
  >,
  Expect<Equal<ButtonIntent<'default', 'inverted'>, 'none'>>,
  // @ts-expect-error - wrong appearance
  ButtonIntent<'default', 'reverseInverted'>,

  // Ghost
  Expect<
    Equal<ButtonIntent<'ghost', 'primary'>, 'none' | 'success' | 'destructive'>
  >,
  Expect<Equal<ButtonIntent<'ghost', 'secondary'>, 'none'>>,
  Expect<Equal<ButtonIntent<'ghost', 'inverted'>, 'none'>>,
  Expect<Equal<ButtonIntent<'ghost', 'reverseInverted'>, 'none'>>,
  // @ts-expect-error - wrong appearance
  ButtonIntent<'Ghost', 'Foo'>,

  // Bare
  Expect<
    Equal<ButtonIntent<'bare', 'primary'>, 'none' | 'success' | 'destructive'>
  >,
  Expect<Equal<ButtonIntent<'bare', 'secondary'>, 'none'>>,
  Expect<Equal<ButtonIntent<'bare', 'inverted'>, 'none'>>,
  Expect<Equal<ButtonIntent<'bare', 'reverseInverted'>, 'none'>>,
  // @ts-expect-error - wrong appearance
  ButtonIntent<'Bare', 'Foo'>,

  // @ts-expect-error - wrong variant
  ButtonIntent<'Foo', 'primary'>
];
