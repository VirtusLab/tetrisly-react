import { ButtonVariant } from './ButtonType.type';
import { Equal, Expect } from '../../../utility-types/testing';

type Appearance = 'primary' | 'secondary' | 'inverted' | 'reverseInverted';

export type ButtonAppearance<TVariant extends ButtonVariant> =
  TVariant extends 'default'
    ? Exclude<Appearance, 'reverseInverted'>
    : TVariant extends 'ghost'
    ? Appearance
    : TVariant extends 'bare'
    ? Appearance
    : never;

// test
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Cases = [
  Expect<
    Equal<ButtonAppearance<'default'>, 'primary' | 'secondary' | 'inverted'>
  >,
  Expect<
    Equal<
      ButtonAppearance<'ghost'>,
      'primary' | 'secondary' | 'inverted' | 'reverseInverted'
    >
  >,
  Expect<
    Equal<
      ButtonAppearance<'bare'>,
      'primary' | 'secondary' | 'inverted' | 'reverseInverted'
    >
  >,
  // @ts-expect-error - wrong variant
  ButtonAppearance<'Foo'>
];
