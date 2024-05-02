import {
  ControlConfig,
  controlStyles,
  DragAndDropFieldConfig,
  dragAndDropFieldStyles,
} from './components';

import type { BaseProps } from '@/types/BaseProps';

export type FileUploaderConfig = BaseProps & {
  innerElements: {
    control: ControlConfig;
    dragAndDropField: DragAndDropFieldConfig;
  };
};

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
  innerElements: {
    control: controlStyles.defaultConfig,
    dragAndDropField: dragAndDropFieldStyles.defaultConfig,
  },
} as const satisfies FileUploaderConfig;

export const fileUploaderStyles = {
  defaultConfig,
};
