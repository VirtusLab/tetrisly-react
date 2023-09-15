import { BareButtonProps } from '@/components/Button/Button.props';

export type Action = Pick<
  BareButtonProps,
  'label' | 'onClick' | 'onFocus' | 'onBlur'
>;

export type ActionProp = Action | [Action, Action | never];
