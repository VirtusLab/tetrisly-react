// test

import { ButtonAppearance } from './ButtonAppearance.type';

import { Equal, Expect } from '@/utility-types/testing';

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
  ButtonAppearance<'Foo'>,
];
