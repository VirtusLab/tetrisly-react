import { defaultConfig, FileIconConfig } from './FileIcon.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types';

type StylesBuilderParams = {
  container: BaseProps;
};

export const stylesBuilder = (custom?: FileIconConfig): StylesBuilderParams => {
  const { ...container } = mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container: {
      ...container,
    },
  };
};
