import type { InputHTMLAttributes } from 'react';

import type { RadioButtonConfig } from './RadioButton.styles';

export type RadioButtonProps = {
  isChecked?: boolean;
  state?: 'alert' | 'disabled';
  custom?: RadioButtonConfig;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled' | 'color' | 'type'
> &
  (
    | { label?: string; helperText?: never }
    | { label: string; helperText?: string }
  );
