import {
  DragAndDropSelectorConfig,
  dragAndDropSelectorStyles,
} from './components';

import type { BaseProps } from '@/types/BaseProps';

export type FileUploaderConfig = BaseProps & {
  innerElements: {
    dragAndDropSelector: DragAndDropSelectorConfig;
  };
};

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
  innerElements: {
    dragAndDropSelector: dragAndDropSelectorStyles.defaultConfig,
  },
} as const satisfies FileUploaderConfig;

export const fileUploaderStyles = {
  defaultConfig,
};
