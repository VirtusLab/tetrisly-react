import { NewItemButtonConfig, defaultConfig } from './NewItemButton.styles';
import { NewItemButtonState } from './NewItemButtonState.type';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type NewItemButtonStyleBuilder = {
  container: BaseProps;
  text: BaseProps;
};

export const stylesBuilder = (
  state: NewItemButtonState,
  custom?: NewItemButtonConfig,
): NewItemButtonStyleBuilder => {
  const {
    innerElements,
    state: containerState,
    ...container
  } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  const { text } = innerElements;
  const containerStyles = containerState[state];

  return {
    container: {
      ...container,
      ...containerStyles,
    },
    text,
  };
};
