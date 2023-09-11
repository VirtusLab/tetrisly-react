import type { LabelHTMLAttributes } from 'react';

import type { LabelConfig } from './Label.styles';

import type { Action } from '@/types';

export type LabelProps = {
  label: string;
  action?: Action;
  tooltip?: boolean;
  optional?: string;
  custom?: LabelConfig;
} & Omit<LabelHTMLAttributes<HTMLLabelElement>, 'color'>;
