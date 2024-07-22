import { ReactNode } from 'react';

import { DialogConfig } from './Dialog.styles';
import { DialogFooter, DialogIntent, DialogSize } from './types';

import type { Action } from '@/types';

export type DialogProps = {
  actions?: Action[];
  additionalAction?: Action;
  children?: ReactNode;
  content?: string;
  custom?: DialogConfig;
  docsPresentation?: boolean;
  footer?: DialogFooter;
  onCloseClick?: (e: React.MouseEvent) => void;
  intent?: DialogIntent;
  size?: DialogSize;
  title?: string;
};
