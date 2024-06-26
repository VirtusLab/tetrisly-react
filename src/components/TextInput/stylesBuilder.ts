import { TextInputConfig, defaultConfig } from './TextInput.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type TextInputStylesBuilder = {
  container: BaseProps;
  input: BaseProps;
  icon: BaseProps;
  text: BaseProps;
  clearButton: BaseProps<'appearance'>;
  beforeComponent: BaseProps;
  afterComponent: BaseProps;
};

export const stylesBuilder = (
  custom?: TextInputConfig,
  beforeComponentType?: 'Icon' | 'Avatar' | 'Prefix' | 'Dropdown',
  afterComponentType?: 'Icon' | 'Suffix' | 'Button' | 'IconButton' | 'Dropdown',
): TextInputStylesBuilder => {
  const {
    innerElements: {
      input,
      icon,
      text,
      clearButton,
      beforeComponent: {
        spacing: beforeComponentSpacing,
        ...beforeComponentStyles
      },
      afterComponent: {
        spacing: afterComponentSpacing,
        ...afterComponentStyles
      },
    },
    ...container
  } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return {
    container,
    input,
    icon,
    text,
    clearButton,
    beforeComponent: {
      ...beforeComponentStyles,
      ...(beforeComponentType && beforeComponentSpacing[beforeComponentType]),
    },
    afterComponent: {
      ...afterComponentStyles,
      ...(afterComponentType && afterComponentSpacing[afterComponentType]),
    },
  };
};
