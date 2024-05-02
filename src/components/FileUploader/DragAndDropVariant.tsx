import { ReactNode, FC, MouseEvent, MouseEventHandler } from 'react';

import { DragAndDropField, DragAndDropFieldConfig } from './components';

import { IconName } from '@/utility-types/IconName';

export type DragAndDropVariantProps = {
  custom?: DragAndDropFieldConfig;
  isExtended?: boolean;
  isDragOver?: boolean;
  state?: 'default' | 'alert' | 'disabled';
  icon?: IconName<20>;
  text?: (onChooseFileClick: MouseEventHandler) => ReactNode;
  caption?: ReactNode;
  onChooseFileClick?: (e?: MouseEvent) => void;
};

export const DragAndDropVariant: FC<DragAndDropVariantProps> = (props) => (
  <DragAndDropField {...props} />
);
