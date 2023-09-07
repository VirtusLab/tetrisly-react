import type { RadioButtonGroupProps } from '../RadioButtonGroup.props';
import { defaultConfig } from '../RadioButtonGroup.styles';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type RadioButtonGroupStylesBuilder = {
  container: BaseProps;
  radioButtonContainer: BaseProps;
};

export const stylesBuilder = (
  custom: RadioButtonGroupProps['custom'],
): RadioButtonGroupStylesBuilder => {
  const {
    innerElements: { radioButtonContainer },
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container,
    radioButtonContainer,
  };
};
