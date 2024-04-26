import type { ReactNode } from 'react';

import { CornerDialogConfig } from './CornerDialog.styles';
import { DefaultButtonProps } from '../Button/Button.props';

import { DistributiveOmit } from '@/utility-types/DistributiveOmit';

export type CornerDialogProps = {
  custom?: CornerDialogConfig;
  intent?: 'none' | 'warning' | 'negative';
  title: string;
  content: ReactNode;
  actions?: DistributiveOmit<
    DefaultButtonProps,
    'size' | 'hasDropdownIndicator'
  >[];
  onCloseClick?: (e?: React.MouseEvent) => void;
};
