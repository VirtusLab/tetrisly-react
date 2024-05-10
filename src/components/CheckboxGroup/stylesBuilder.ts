import { CheckboxGroupConfig, defaultConfig } from './CheckboxGroup.style';

import { HelperTextConfig } from '@/components/HelperText/HelperText.styles';
import { LabelConfig } from '@/components/Label/Label.styles';
import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type CheckboxGroupStylesBuilder = {
  container: BaseProps;
  checkboxContainer: BaseProps;
  label: LabelConfig;
  helperText: HelperTextConfig;
};

export const stylesBuilder = (
  custom?: CheckboxGroupConfig,
): CheckboxGroupStylesBuilder => {
  const {
    innerElements: { helperText, label, checkboxContainer },
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container,
    checkboxContainer,
    label,
    helperText,
  };
};
