import { InputHTMLAttributes } from 'react';

import type { TagInputConfig } from './TagInput.styles';

import { BasicInputState } from '@/types';

export type TagInputProps = {
  custom?: TagInputConfig;
  state?: BasicInputState;
  isValidationError?: boolean;
  label?: string;
  helperText?: string;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'disabled' | 'color' | 'type'
>;
