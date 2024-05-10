import type { RadioButtonProps } from './RadioButton.props';
import { defaultConfig } from './RadioButton.styles';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type RadioButtonStylesBuilder = {
  container: BaseProps;
  radioButton: BaseProps;
  label: BaseProps;
  helperText: BaseProps;
};

export const stylesBuilder = (
  custom: RadioButtonProps['custom'],
): RadioButtonStylesBuilder => {
  const {
    innerElements: { radioButton, label, helperText },
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container,
    radioButton,
    label,
    helperText,
  };
};
