import {
  DragAndDropSelectorConfig,
  defaultConfig,
} from './DragAndDropSelector.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type DragAndDropSelectorStylesBuilder = {
  container: BaseProps;
  icon: BaseProps;
  title: BaseProps;
  description: BaseProps;
};

export const stylesBuilder = (
  custom?: DragAndDropSelectorConfig,
): DragAndDropSelectorStylesBuilder => {
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
