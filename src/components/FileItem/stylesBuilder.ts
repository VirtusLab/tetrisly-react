import { CompressedVariantConfig, ExtendedVariantConfig } from './components';
import { FileItemProps, fallback } from './FileItem.props';
import { defaultConfig } from './FileItem.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type FileItemStylesBuilder = {
  container: BaseProps;
  compressed: CompressedVariantConfig;
  extended: ExtendedVariantConfig;
};

export const stylesBuilder = (props: FileItemProps): FileItemStylesBuilder => {
  const {
    state,
    inverted,
    thumbnail,
    invertedAlert,
    compressed,
    extended,
    ...container
  } = mergeConfigWithCustom({
    defaultConfig,
    custom: props.custom,
  });

  const withStateStyles = state[props.state ?? fallback.state];
  const withInvertedStyles = props.isInverted ? inverted.yes : inverted.no;
  const withThumbnailStyles = thumbnail[props.thumbnail ?? fallback.thumbnail];
  const withInvertedAlertStyles =
    props.state === 'alert' && props.isInverted ? invertedAlert : {};

  return {
    container: {
      ...container,
      ...withStateStyles,
      ...withInvertedStyles,
      ...withThumbnailStyles,
      ...withInvertedAlertStyles,
    },
    compressed,
    extended,
  };
};
