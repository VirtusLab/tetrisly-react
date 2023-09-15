import type { ToastProps } from '../Toast.props';
import { defaultConfig } from '../Toast.styles';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type StylesBuilderProps = Required<Pick<ToastProps, 'emphasis' | 'intent'>> & {
  onCloseClick: ToastProps['onCloseClick'];
  custom: ToastProps['custom'];
};

type ToastStylesBuilder = {
  container: BaseProps;
  actionContainer: BaseProps;
  closeButton: BaseProps;
  iconContainer: BaseProps;
  middleDot: BaseProps;
};

export const stylesBuilder = ({
  custom,
  ...props
}: StylesBuilderProps): ToastStylesBuilder => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });

  const {
    emphasis: emphasisContainerStyles,
    intent: intentContainerStyles,
    closeButton: closeButtonContainerStyles,
    innerElements: {
      actionContainer,
      closeButton,
      iconContainer: iconContainerStyles,
      middleDot,
    },
    ...restContainerStyles
  } = config;

  const container = {
    ...intentContainerStyles[props.intent],
    ...emphasisContainerStyles[props.emphasis],
    ...restContainerStyles,

    ...(!!props.onCloseClick && closeButtonContainerStyles),
  };

  const { intent: intentIconContainerStyles, ...restIconContainerStyles } =
    iconContainerStyles;

  const iconContainer = {
    ...intentIconContainerStyles[props.intent].emphasis[props.emphasis],
    ...restIconContainerStyles,
  };

  return {
    container,
    actionContainer,
    iconContainer,
    closeButton,
    middleDot,
  };
};
