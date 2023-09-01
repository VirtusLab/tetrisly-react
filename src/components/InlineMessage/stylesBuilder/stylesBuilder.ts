import { merge } from 'lodash';

import { InlineMessageProps } from '../InlineMessage.props';
import { defaultConfig, resolveIconName } from '../InlineMessage.styles';
import { InlineMessageIntent } from '../InlineMessageIntent.type';

import { BaseProps } from '@/types/BaseProps';
import { IconName } from '@/utility-types/IconName';

type InlineMessageStyleBuilder = {
  container: BaseProps;
  title: BaseProps;
  iconContainer: BaseProps;
  description: BaseProps;
};

export const stylesBuilder = (
  intent: InlineMessageIntent,
  custom: InlineMessageProps['custom'],
): InlineMessageStyleBuilder => {
  const { innerElements, ...container } = merge(defaultConfig, custom);
  const { description, title, iconContainer } = innerElements;

  const { intent: titleIntent, ...restTitleStyles } = title;
  const { intent: iconContainerIntent, ...restIconContainerStyles } =
    iconContainer;

  return {
    container,
    description,
    title: {
      ...titleIntent[intent],
      ...restTitleStyles,
    },
    iconContainer: {
      ...iconContainerIntent[intent],
      ...restIconContainerStyles,
    },
  };
};
