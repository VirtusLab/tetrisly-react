import { merge } from 'lodash';

import { InlineMessageProps } from '../InlineMessage.props';
import { config as defaultConfig } from '../InlineMessage.styles';
import { InlineMessageIntent } from '../InlineMessageIntent.type';

export const stylesBuilder = (
  intent: InlineMessageIntent,
  custom: InlineMessageProps['custom']
) => {
  const styles = merge(defaultConfig, custom);

  const { intent: titleIntent, ...restTitle } = styles.title;
  const { intent: iconIntent, ...restIcon } = styles.icon;
  const { intent: iconContainerIntent, ...restIconContainer } =
    styles.iconContainer;

  return {
    ...styles,
    title: {
      ...restTitle,
      ...titleIntent[intent],
    },
    icon: {
      ...restIcon,
      ...iconIntent[intent],
    },
    iconContainer: {
      ...restIconContainer,
      ...iconContainerIntent[intent],
    },
  };
};
