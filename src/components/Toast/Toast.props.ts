import { ToastConfig } from './Toast.styles';
import { ToastIntent } from './types';
import { ButtonProps } from '../Button';

import { Emphasis } from '@/types/Emphasis';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type Action = Pick<
  ButtonProps<'bare'>,
  'label' | 'onClick' | 'onFocus' | 'onBlur'
>;

export type ToastProps = {
  text: string;
  emphasis?: Emphasis;
  intent?: ToastIntent;
  action?: Action | [Action, Action | never];
  onCloseClick?: (e: React.MouseEvent) => void;
  custom?: DeepPartial<ToastConfig>;
};
