import { ButtonProps } from '@/components/Button';

export type Action = Pick<
  ButtonProps,
  'label' | 'onClick' | 'onFocus' | 'onBlur'
>;

export type ActionProp = Action | [Action, Action | never];
