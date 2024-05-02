import { ReactNode } from 'react';

import type { ControlConfig } from './Control.styles';

import { HelperTextProps } from '@/components/HelperText';
import { LabelProps } from '@/components/Label';

export type ControlProps = {
  children?: ReactNode;
  custom?: ControlConfig;
  label?: LabelProps;
  helperText?: HelperTextProps;
};
