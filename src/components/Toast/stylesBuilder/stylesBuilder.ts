import { IconProps } from '@virtuslab/tetrisly-icons';

import { ToastProps } from '../Toast.props';
import { defaultConfig } from '../Toast.styles';
import { ToastIntent } from '../types';

import { ButtonAppearance } from '@/components/Button/types/ButtonAppearance.type';
import { IconButtonProps } from '@/components/IconButton/IconButton.props';
import { IconButtonAppearance } from '@/components/IconButton/IconButtonAppearance.type';
import { mergeConfigWithCustom } from '@/services';
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
  iconProps: Partial<IconProps>;
  iconContainerStyles: BaseProps;
  middleDotStyles: BaseProps;
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

  const icon: { intent: Record<ToastIntent, Partial<IconProps>> } = {
    intent: {
      neutral: {},
      informative: {
        name: '20-info-fill',
      },
      success: {
        name: '20-check-circle-fill',
      },
      warning: {
        name: '20-warning-fill',
      },
      negative: {
        name: '20-alert-fill',
      },
    },
  };

  const iconProps: Partial<IconProps> = {
    ...icon.intent[props.intent],
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
    iconProps,
    iconContainerStyles,
    middleDotStyles,
  };
};
