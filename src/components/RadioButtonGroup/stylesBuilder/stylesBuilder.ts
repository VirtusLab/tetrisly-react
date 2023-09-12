import type { RadioButtonGroupProps } from '../RadioButtonGroup.props';
import { defaultConfig } from '../RadioButtonGroup.styles';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type RadioButtonGroupStylesBuilder = {
  container: BaseProps;
  radioButtonContainer: BaseProps;
  label: BaseProps;
  helperText: BaseProps;
};

export const stylesBuilder = (
  custom: RadioButtonGroupProps['custom'],
): RadioButtonGroupStylesBuilder => {
  const {
    innerElements: { radioButtonContainer, label, helperText },
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container,
    radioButtonContainer,
    label,
    helperText,
  };
};
