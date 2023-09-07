import { SystemProps } from '@xstyled/styled-components';

import { CheckboxConfig, defaultConfig } from '../Checkbox.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type CheckboxStylesBuilder = {
  container: BaseProps;
  checkbox: SystemProps;
  checkboxContainer: BaseProps;
  checkboxIcon: BaseProps;
  label: BaseProps;
  helperText: BaseProps;
};

export const stylesBuilder = (
  custom?: CheckboxConfig,
): CheckboxStylesBuilder => {
  const options = mergeConfigWithCustom({ defaultConfig, custom });
  const {
    innerElements: {
      checkbox,
      checkboxContainer,
      checkboxIcon,
      label,
      helperText,
    },
    ...container
  } = options;

  return {
    container,
    checkbox,
    checkboxContainer,
    checkboxIcon,
    label,
    helperText,
  };
};
