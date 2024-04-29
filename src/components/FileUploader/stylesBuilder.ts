import { DragAndDropSelectorConfig } from './components';
import { FileUploaderConfig, defaultConfig } from './FileUploader.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type FileUploaderStylesBuilder = {
  container: BaseProps;
  dragAndDropSelector: DragAndDropSelectorConfig;
};

export const stylesBuilder = (
  custom?: FileUploaderConfig,
): FileUploaderStylesBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return {
    container,
    dragAndDropSelector: innerElements.dragAndDropSelector,
  };
};
