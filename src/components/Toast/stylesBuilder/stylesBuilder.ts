import { merge } from 'lodash';

import { ToastProps } from '../Toast.props';
import { config as defaultConfig } from '../Toast.styles';

import { ButtonAppearance } from '@/components/Button/types/ButtonAppearance.type';
import { IconButtonProps } from '@/components/IconButton/IconButton.props';
import { IconButtonAppearance } from '@/components/IconButton/IconButtonAppearance.type';
import { BaseProps } from '@/types/BaseProps';

type StylesBuilderProps = Required<Pick<ToastProps, 'emphasis' | 'intent'>> & {
  custom: ToastProps['custom'];
  closeButton: boolean;
};

type ToastStylesBuilder = {
  actionProps: {
    appearance: ButtonAppearance<'bare'>;
  };
  actionContainerStyles: BaseProps;
  closeButtonProps: Partial<IconButtonProps<'ghost'>>;
  closeButtonStyles: BaseProps;
  containerStyles: BaseProps;
  iconContainerStyles: BaseProps;
  middleDotStyles: BaseProps;
};

export const stylesBuilder = (
  props: StylesBuilderProps,
): ToastStylesBuilder => {
  const config = merge(defaultConfig, props.custom);

  const {
    emphasis: emphasisContainerStyles,
    intent: intentContainerStyles,
    closeButton: closeButtonContainerStyles,
    innerElements: innerElementsStyles,
    ...restContainerStyles
  } = config;

  const containerStyles: BaseProps = {
    ...intentContainerStyles[props.intent],
    ...emphasisContainerStyles[props.emphasis],
    ...restContainerStyles,
    ...(props.closeButton && closeButtonContainerStyles),
  };

  const {
    actionContainer: actionContainerStyles,
    closeButton: closeButtonStyles,
    iconContainer,
    middleDot: middleDotStyles,
  } = innerElementsStyles;

  const buttonIntentAppearance =
    props.intent === 'warning' ? 'reverseInverted' : 'inverted';
  const buttonAppearance =
    props.emphasis === 'high' ? buttonIntentAppearance : 'primary';

  const actionProps = {
    appearance: buttonAppearance as ButtonAppearance<'bare'>,
  };

  const { intent: intentIconContainerStyles, ...restIconContainerStyles } =
    iconContainer;

  const iconContainerStyles: BaseProps = {
    ...intentIconContainerStyles[props.intent].emphasis[props.emphasis],
    ...restIconContainerStyles,
  };

  const closeButtonProps: Partial<IconButtonProps<'ghost'>> = {
    appearance: buttonAppearance as IconButtonAppearance<'ghost'>,
  };

  return {
    actionProps,
    actionContainerStyles,
    closeButtonProps,
    closeButtonStyles,
    containerStyles,
    iconContainerStyles,
    middleDotStyles,
  };
};
