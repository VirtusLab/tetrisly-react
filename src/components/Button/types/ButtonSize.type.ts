import { ButtonVariant } from './ButtonType.type';
import { Equal, Expect } from '../../../utility-types/testing';

export type ButtonSize<TVariant extends ButtonVariant> = TVariant extends 'Bare'
  ? 'medium' | 'large'
  : 'small' | 'medium' | 'large';

// test
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Cases = [
  Expect<Equal<ButtonSize<'Default'>, 'small' | 'medium' | 'large'>>,
  Expect<Equal<ButtonSize<'Ghost'>, 'small' | 'medium' | 'large'>>,
  Expect<Equal<ButtonSize<'Bare'>, 'medium' | 'large'>>,
  // @ts-expect-error - wrong variant
  ButtonSize<'Foo'>
];
