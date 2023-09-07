import { InputHTMLAttributes } from 'react';

import { RadioButtonConfig } from './RadioButton.styles';

export type RadioButtonProps = {
  isChecked?: boolean;
  state?: 'alert' | 'disabled';
  custom?: RadioButtonConfig;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled' | 'color' | 'type'
> &
  (
    | { label?: string; helperText?: undefined }
    | { label: string; helperText?: string }
  );
