import { ButtonProps } from '../components/Button';
export type Action = Pick<ButtonProps<'bare'>, 'label' | 'onClick' | 'onFocus' | 'onBlur'>;
export type ActionProp = Action | [Action, Action | never];
