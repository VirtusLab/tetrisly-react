/*  eslint-disable  @typescript-eslint/no-unused-vars */
import { ButtonProps } from '.';

type Props = Partial<ButtonProps>;

const case0: Props = {
  variant: 'default',
  appearance: 'primary',
  intent: 'none',
};
const case1: Props = {
  variant: 'default',
  appearance: 'primary',
  intent: 'success',
};
const case2: Props = {
  variant: 'default',
  appearance: 'primary',
  intent: 'destructive',
};

const case3: Props = {
  variant: 'default',
  appearance: 'secondary',
  intent: 'none',
};
const case4: Props = {
  variant: 'default',
  appearance: 'secondary',
  intent: 'success',
};
const case5: Props = {
  variant: 'default',
  appearance: 'secondary',
  intent: 'destructive',
};

const case6: Props = {
  variant: 'default',
  appearance: 'inverted',
  intent: 'none',
};
// @ts-expect-error - wrong intent
const case7: Props = {
  variant: 'default',
  appearance: 'inverted',
  intent: 'success',
};
// @ts-expect-error - wrong intent
const case8: Props = {
  variant: 'default',
  appearance: 'inverted',
  intent: 'destructive',
};
// @ts-expect-error - wrong appearance
const case9: Props = {
  variant: 'default',
  appearance: 'reverseInverted',
};

const case10: Props = {
  variant: 'ghost',
  appearance: 'primary',
  intent: 'none',
};
const case11: Props = {
  variant: 'ghost',
  appearance: 'primary',
  intent: 'success',
};
const case12: Props = {
  variant: 'ghost',
  appearance: 'primary',
  intent: 'destructive',
};

const case13: Props = {
  variant: 'ghost',
  appearance: 'secondary',
  intent: 'none',
};
// @ts-expect-error - wrong intent
const case14: Props = {
  variant: 'ghost',
  appearance: 'secondary',
  intent: 'destructive',
};

const case15: Props = {
  variant: 'ghost',
  appearance: 'inverted',
  intent: 'none',
};
const case16: Props = {
  variant: 'ghost',
  appearance: 'reverseInverted',
  intent: 'none',
};

const case17: Props = {
  variant: 'bare',
  appearance: 'primary',
  intent: 'success',
};
const case18: Props = {
  variant: 'bare',
  appearance: 'primary',
  intent: 'destructive',
};
// @ts-expect-error - wrong intent
const case19: Props = {
  variant: 'bare',
  appearance: 'secondary',
  intent: 'destructive',
};
