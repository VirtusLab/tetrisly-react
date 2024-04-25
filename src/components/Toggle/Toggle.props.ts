import { MouseEvent } from 'react';

import type { ToggleConfig } from './Toggle.styles';
import { HelperTextProps } from '../HelperText';

export type ToggleProps = {
  isIndeterminate?: boolean;
  isChecked?: boolean;
  size?: 'small' | 'large';
  state?: 'disabled' | undefined;
  label?: string;
  helperText?: Pick<HelperTextProps, 'text'>;
  custom?: ToggleConfig;
  onChange?: (e?: MouseEvent<HTMLSpanElement>) => void;
};
