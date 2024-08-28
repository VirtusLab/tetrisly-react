import {
  DragAndDropFieldProps,
  DragAndDropFieldState,
} from './DragAndDropField.props';
import { defaultConfig } from './DragAndDropField.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type StylesBuilderParams = {
  custom: DragAndDropFieldProps['custom'];
  extended: boolean;
  state: DragAndDropFieldState;
  dragging: boolean;
};

type DragAndDropFieldStylesBuilder = {
  container: BaseProps;
  link: BaseProps;
  icon: BaseProps;
  text: BaseProps;
  caption: BaseProps;
};

export const stylesBuilder = ({
  custom,
  extended,
  state,
  dragging,
}: StylesBuilderParams): DragAndDropFieldStylesBuilder => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });

  const { extendedContainer, icon, text, link, caption, ...restStyles } =
    config;

  const { state: stateStyles, ...commonContainerStyles } = restStyles;
  const updatedState: DragAndDropFieldState = dragging ? 'dragover' : state;
  const containerStyles = {
    ...commonContainerStyles,
    ...stateStyles[updatedState],
    ...(extended && extendedContainer),
  };

  return {
    icon,
    text,
    caption,
    container: containerStyles,
    link,
  };
};
