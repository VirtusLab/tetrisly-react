import { FilesListConfig, defaultConfig } from './FilesList.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type FilesListStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = (
  custom?: FilesListConfig,
): FilesListStylesBuilder => {
  const container = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return { container };
};
