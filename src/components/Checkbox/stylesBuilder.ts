import { SystemProps } from '@xstyled/styled-components';

import { CheckboxConfig, defaultConfig } from './Checkbox.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type CheckboxStylesBuilder = {
  container: BaseProps;
  input: SystemProps;
  checkboxContainer: BaseProps;
  checkboxIcon: BaseProps;
  label: BaseProps;
  helperText: BaseProps;
};

export const stylesBuilder = (
  custom?: CheckboxConfig,
): CheckboxStylesBuilder => {
  const {
    innerElements: {
      input,
      checkboxContainer,
      checkboxIcon,
      label,
      helperText,
    },
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container,
    input,
    checkboxContainer,
    checkboxIcon,
    label,
    helperText,
  };
};
