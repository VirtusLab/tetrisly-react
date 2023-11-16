import type { InlineBannerProps } from '../InlineBanner.props';
import { defaultConfig } from '../InlineBanner.styles';
import type { InlineBannerIntent } from '../types';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types';

type StylesBuilderParams = {
  intent: InlineBannerIntent;
  hasCloseButton: boolean;
  custom: InlineBannerProps['custom'];
};

type InlineBannerStylesBuilder = {
  container: BaseProps;
  iconContainer: BaseProps;
  contentContainer: BaseProps;
  actionContainer: BaseProps;
  description: BaseProps;
  title: BaseProps;
  closeButton: BaseProps<'appearance'>;
};

export const stylesBuilder = ({
  intent,
  hasCloseButton,
  custom,
}: StylesBuilderParams): InlineBannerStylesBuilder => {
  const {
    intent: intentStyles,
    innerElements: {
      iconContainer,
      contentContainer,
      actionContainer,
      description,
      title,
      closeButton,
    },
    spacing,
    ...restProps
  } = mergeConfigWithCustom({ defaultConfig, custom });

  const { intent: intentTitleStyles, ...restTitleStyles } = title;
  const titleStyles = {
    ...intentTitleStyles[intent],
    ...restTitleStyles,
  };

  const { intent: intentIconContainerStyles, ...restIconContainerStyles } =
    iconContainer;
  const iconContainerStyles = {
    ...iconContainer.intent[intent],
    ...restIconContainerStyles,
  };

  return {
    container: {
      ...restProps,
      ...intentStyles[intent],
      ...(hasCloseButton && spacing.container),
    },
    iconContainer: iconContainerStyles,
    contentContainer,
    actionContainer,
    description,
    title: titleStyles,
    closeButton,
  };
};
