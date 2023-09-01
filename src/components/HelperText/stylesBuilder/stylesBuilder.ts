import { merge } from 'lodash';

import { HelperTextProps } from '../HelperText.props';
import { defaultConfig, resolveIconName } from '../HelperText.styles';
import { HelperTextIntent } from '../HelperTextIntent.type';

import { BaseProps } from '@/types/BaseProps';
import { IconName } from '@/utility-types/IconName';

type HelperTextStyleBuilder = {
  container: BaseProps;
  iconContainer: BaseProps;
  icon: { name: IconName<16> };
};

export const stylesBuilder = (
  intent: HelperTextIntent,
  custom: HelperTextProps['custom'],
): HelperTextStyleBuilder => {
  const {
    innerElements,
    intent: containerIntent,
    ...container
  } = merge(defaultConfig, custom);
  const { iconContainer } = innerElements;

  const name = resolveIconName(intent);

  return {
    container: {
      ...containerIntent[intent],
      ...container,
    },
    iconContainer,
    icon: {
      name,
    },
  };
};
