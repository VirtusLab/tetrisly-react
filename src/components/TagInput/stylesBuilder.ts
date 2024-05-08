import { TagInputConfig, defaultConfig } from './TagInput.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom/mergeConfigWithCutom';
import { BaseProps } from '@/types/BaseProps';

type ContainerProps = BaseProps & { flexDirection: string };
type InputProps = BaseProps & {
  color?: {
    placeholder?: string;
  };
  opacity?: {
    placeholder?: number;
  };
};
type InputContainerProps = BaseProps & {
  ringInset?: string;
  ringColor?:
    | string
    | {
        _?: string;
        hoverWithoutButton?: string;
        alert?: string;
        focusWithin?: string;
      };
};

type StylesBuilderParams = {
  container: ContainerProps;
  input: InputProps;
  label: BaseProps;
  inputContainer: InputContainerProps;
  helperText: BaseProps;
};

export const stylesBuilder = (
  custom?: TagInputConfig,
  isAlertOrError?: boolean,
): StylesBuilderParams => {
  const {
    innerElements: { input, helperText, label, inputContainer },
    ...container
  } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  const {
    isValidationError: inputContainerValidationErrorStyle,
    ...inputContainerRest
  } = inputContainer;

  const {
    isValidationError: helperTextValidationErrorStyle,
    ...helperTextRest
  } = helperText;

  const inputContainerStyles =
    (isAlertOrError && {
      ...inputContainerRest,
      ...inputContainerValidationErrorStyle,
    }) ||
    inputContainerRest;
  const helperTextStyles =
    (isAlertOrError && {
      ...helperTextRest,
      ...helperTextValidationErrorStyle,
    }) ||
    helperTextRest;

  return {
    container,
    input,
    label,
    inputContainer: inputContainerStyles,
    helperText: helperTextStyles,
  };
};
