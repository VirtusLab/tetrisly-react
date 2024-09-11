import type { ButtonGroupSize } from './ButtonGroup.props';
import { ButtonGroupConfig, defaultConfig } from './ButtonGroup.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type ButtonGroupStyleBuilder = {
  container: BaseProps;
  button: BaseProps;
};

type ButtonGroupStyleBuilderInput = {
  size: ButtonGroupSize;
  custom?: ButtonGroupConfig;
};

export const stylesBuilder = ({
  size,
  custom,
}: ButtonGroupStyleBuilderInput): ButtonGroupStyleBuilder => {
  const { button, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });
  const buttonStyles = { ...button, ...button.size[size] };

  return {
    container,
    button: buttonStyles,
  };
};
