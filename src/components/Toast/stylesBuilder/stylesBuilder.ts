import { merge } from 'lodash';

import { ToastProps } from '../Toast.props';
import { config as defaultConfig } from '../Toast.styles';

type StylesBuilderProps = Required<Pick<ToastProps, 'emphasis' | 'intent'>> & {
  custom: ToastProps['custom'];
  closeButton: boolean;
};

export function stylesBuilder(props: StylesBuilderProps) {
  const config = merge(defaultConfig, props.custom);

  const {
    emphasis: emphasisContainerStyles,
    intent: intentContainerStyles,
    closeButton: closeButtonContainerStyles,
    innerElements: innerElementsStyles,
    ...restContainerStyles
  } = config;

  const containerStyles = {
    ...restContainerStyles,
    ...intentContainerStyles[props.intent],
    ...emphasisContainerStyles[props.emphasis],
    ...(props.closeButton && closeButtonContainerStyles),
  };

  const {
    action,
    actionContainer: actionContainerStyles,
    closeButton: closeButtonStyles,
    icon,
    iconContainer,
    middleDot: middleDotStyles,
  } = innerElementsStyles;

  const { emphasis: emphasisActionStyles, ...restActionStyles } = action;

  const actionStyles = {
    ...emphasisActionStyles[props.emphasis],
    ...restActionStyles,
  };

  const { intent: intentIconStyles, ...restIconStyles } = icon;

  const iconStyles = {
    ...intentIconStyles[props.intent],
    ...restIconStyles,
  };

  const { intent: intentIconContainerStyles, ...restIconContainerStyles } =
    iconContainer;

  const iconContainerStyles = {
    ...intentIconContainerStyles[props.intent].emphasis[props.emphasis],
    ...restIconContainerStyles,
  };

  return {
    actionStyles,
    actionContainerStyles,
    closeButtonStyles,
    containerStyles,
    iconStyles,
    iconContainerStyles,
    middleDotStyles,
  };
}
