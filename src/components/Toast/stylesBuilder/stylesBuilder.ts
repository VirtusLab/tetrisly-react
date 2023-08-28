import { IconProps } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';

import { ToastProps } from '../Toast.props';
import { config as defaultConfig } from '../Toast.styles';
import { ToastIntent } from '../types';

import { ButtonAppearance } from '@/components/Button/types/ButtonAppearance.type';
import { ButtonVariant } from '@/components/Button/types/ButtonType.type';
import { IconButtonProps } from '@/components/IconButton/IconButton.props';

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

  const actionIntentAppearance =
    props.intent === 'warning' ? 'reverseInverted' : 'inverted';
  const actionAppearance =
    props.emphasis === 'high' ? actionIntentAppearance : 'primary';

  const actionProps = {
    appearance: actionAppearance as ButtonAppearance<'ghost'>,
    variant: 'bare' as ButtonVariant,
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

  const iconProps = {
    ...icon.intent[props.intent],
  };

  const { intent: intentIconContainerStyles, ...restIconContainerStyles } =
    iconContainer;

  const iconContainerStyles = {
    ...intentIconContainerStyles[props.intent].emphasis[props.emphasis],
    ...restIconContainerStyles,
  };

  const closeButtonProps: IconButtonProps<'ghost'> = {
    size: 'small',
    appearance: 'primary',
    variant: 'ghost',
    intent: 'none',
    icon: '20-close',
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
}
