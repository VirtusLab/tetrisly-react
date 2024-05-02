import { ReactNode, MouseEvent, MouseEventHandler } from 'react';

import { DragAndDropFieldConfig } from './DragAndDropField.styles';

import { IconName } from '@/utility-types/IconName';

export type DragAndDropFieldProps = {
  custom?: DragAndDropFieldConfig;
  isExtended?: boolean;
  isDragOver?: boolean;
  state?: 'default' | 'alert' | 'disabled';
  icon?: IconName<20>;
  text?: (onChooseFileClick: MouseEventHandler) => ReactNode;
  caption?: ReactNode;
  onChooseFileClick?: (e?: MouseEvent) => void;
};