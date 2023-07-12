import { ButtonVariant } from './ButtonType.type';
import { Equal, Expect } from '../../../utility-types/testing';

export type ButtonSize<TVariant extends ButtonVariant> = TVariant extends 'bare'
  ? 'medium' | 'large'
  : 'small' | 'medium' | 'large';

// test
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Cases = [
  Expect<Equal<ButtonSize<'default'>, 'small' | 'medium' | 'large'>>,
  Expect<Equal<ButtonSize<'ghost'>, 'small' | 'medium' | 'large'>>,
  Expect<Equal<ButtonSize<'bare'>, 'medium' | 'large'>>,
  // @ts-expect-error - wrong variant
  ButtonSize<'Foo'>
];
