import { merge } from 'lodash';

import { InlineMessageProps } from '../InlineMessage.props';
import { config as defaultConfig } from '../InlineMessage.styles';
import { InlineMessageIntent } from '../InlineMessageIntent.type';

import { BaseProps } from '@/types/BaseProps';
import { IconName } from '@/utility-types/IconName';

type InlineMessageStyleBuilder = {
  titleStyles: BaseProps;
  iconStyles: { name: IconName<20> };
  iconContainerStyles: BaseProps;
  descriptionStyles: BaseProps;
} & BaseProps;

export const stylesBuilder = (
  intent: InlineMessageIntent,
  custom: InlineMessageProps['custom'],
): InlineMessageStyleBuilder => {
  const { innerElements, ...styles } = merge(defaultConfig, custom);

  const { intent: titleIntent, ...restTitleStyles } = innerElements.title;
  const { intent: iconIntent, ...restIconStyles } = innerElements.icon;
  const descriptionStyles = innerElements.description;
  const { intent: iconContainerIntent, ...restIconContainerStyles } =
    innerElements.iconContainer;

  return {
    ...styles,
    descriptionStyles,
    titleStyles: {
      ...restTitleStyles,
      ...titleIntent[intent],
    },
    iconStyles: {
      ...restIconStyles,
      ...iconIntent[intent],
    },
    iconContainerStyles: {
      ...restIconContainerStyles,
      ...iconContainerIntent[intent],
    },
  };
};
