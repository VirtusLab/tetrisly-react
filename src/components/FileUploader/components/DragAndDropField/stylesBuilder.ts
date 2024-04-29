import {
  DragAndDropFieldConfig,
  defaultConfig,
} from './DragAndDropField.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type DragAndDropFieldStylesBuilder = {
  container: BaseProps;
  icon: BaseProps;
  title: BaseProps;
  description: BaseProps;
};

export const stylesBuilder = (
  custom?: DragAndDropFieldConfig,
): DragAndDropFieldStylesBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return {
    container,
    icon: innerElements.icon,
    title: innerElements.title,
    description: innerElements.description,
  };
};
