import { AlertBannerProps } from '../AlertBanner.props';
import { defaultConfig } from '../AlertBanner.styles';
import { AlertBannerIntent } from '../types';

import { ButtonProps } from '@/components/Button';
import { ButtonAppearance } from '@/components/Button/types/ButtonAppearance.type';
import { IconButtonProps } from '@/components/IconButton/IconButton.props';
import { IconButtonAppearance } from '@/components/IconButton/IconButtonAppearance.type';
import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type AlertBannerStylesBuilder = {
  container: BaseProps;
  iconContainer: BaseProps;
  actionContainer: BaseProps;
  closeButton: BaseProps;
  actionProps: Partial<ButtonProps<'ghost'>>;
  closeButtonProps: Partial<IconButtonProps<'ghost'>>;
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
    appearance: (intent === 'warning'
      ? 'reverseInverted'
      : 'inverted') as ButtonAppearance<'ghost'>,
  };

  const closeButtonProps = {
    appearance: (intent === 'warning'
      ? 'primary'
      : 'inverted') as IconButtonAppearance<'ghost'>,
  };

  return {
    container: {
      ...intentStyles[intent],
      ...restStyles,
    },
    iconContainer,
    actionContainer,
    actionProps,
    closeButtonProps,
    closeButton,
  };
};
