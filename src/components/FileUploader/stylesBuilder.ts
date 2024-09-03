import { FileUploaderProps } from './FileUploader.props';
import { defaultConfig } from './FileUploader.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type StylesBuilderParams = {
  custom: FileUploaderProps['custom'];
};

type FileUploaderStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = ({
  custom,
}: StylesBuilderParams): FileUploaderStylesBuilder => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });

  const { hasStroke: strokedStyles, ...restStyles } = config;

  return {
    container: {
      ...restStyles,
    },
  };
};
