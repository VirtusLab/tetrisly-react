import { AlertBannerProps } from '../AlertBanner.props';
import { defaultConfig } from '../AlertBanner.styles';
import { AlertBannerIntent } from '../types';

import { ButtonProps } from '@/components/Button';
import { IconButtonProps } from '@/components/IconButton/IconButton.props';
import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type AlertBannerStylesBuilder = {
  container: BaseProps;
  iconContainer: BaseProps;
  actionContainer: BaseProps;
  closeButton: BaseProps;
  actionProps: Partial<ButtonProps>;
  closeButtonProps: Partial<IconButtonProps>;
};

export const stylesBuilder = (
  intent: AlertBannerIntent,
  custom: AlertBannerProps['custom'],
): AlertBannerStylesBuilder => {
  const {
    intent: intentStyles,
    innerElements: { iconContainer, actionContainer, closeButton },
    ...restStyles
  } = mergeConfigWithCustom({ defaultConfig, custom });

  const actionProps = {
    appearance: intent === 'warning' ? 'reverseInverted' : 'inverted',
  };

  const closeButtonProps = {
    appearance: intent === 'warning' ? 'primary' : 'inverted',
  };

  return {
    container: {
      ...intentStyles[intent],
      ...restStyles,
    },
    iconContainer,
    actionContainer,
    actionProps: actionProps as Partial<ButtonProps>,
    closeButtonProps: closeButtonProps as Partial<IconButtonProps>,
    closeButton,
  };
};
