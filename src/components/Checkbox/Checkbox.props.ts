import type { InputHTMLAttributes } from 'react';

import type { CheckboxConfig } from './Checkbox.styles';

export type CheckboxProps = {
  isChecked?: boolean;
  isIndeterminate?: boolean;
  state?: 'alert' | 'disabled';
  custom?: CheckboxConfig;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled' | 'color' | 'type'
> &
  (
    | { label?: string; helperText?: never }
    | { label: string; helperText?: string }
  );
