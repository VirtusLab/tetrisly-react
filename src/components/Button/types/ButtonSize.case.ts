import { ButtonSize } from './ButtonSize.type';

import { Equal, Expect } from '@/utility-types/testing';

// test
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Cases = [
  Expect<Equal<ButtonSize<'default'>, 'small' | 'medium' | 'large'>>,
  Expect<Equal<ButtonSize<'ghost'>, 'small' | 'medium' | 'large'>>,
  Expect<Equal<ButtonSize<'bare'>, 'medium' | 'large'>>,
  // @ts-expect-error - wrong variant
  ButtonSize<'Foo'>
];
