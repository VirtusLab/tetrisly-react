import { TagInputConfig, defaultConfig } from './TagInput.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type StylesBuilderParams = {
  container: BaseProps;
  input: BaseProps;
  inputContainer: BaseProps;
};

export const stylesBuilder = (
  custom?: TagInputConfig,
  isAlertOrError?: boolean,
): StylesBuilderParams => {
  const {
    innerElements: { input, inputContainer },
    ...container
  } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  const {
    isValidationError: inputContainerValidationErrorStyle,
    ...inputContainerRest
  } = inputContainer;

  const inputContainerStyles =
    (isAlertOrError && {
      ...inputContainerRest,
      ...inputContainerValidationErrorStyle,
    }) ||
    inputContainerRest;

  return {
    container,
    input,
    inputContainer: inputContainerStyles,
  };
};
