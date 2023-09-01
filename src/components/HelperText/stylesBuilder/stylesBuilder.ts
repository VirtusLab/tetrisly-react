import { merge } from 'lodash';

import { HelperTextProps } from '../HelperText.props';
import { defaultConfig } from '../HelperText.styles';
import { HelperTextIntent } from '../HelperTextIntent.type';

import { BaseProps } from '@/types/BaseProps';

type HelperTextStyleBuilder = {
  container: BaseProps;
  iconContainer: BaseProps;
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

  return {
    container: {
      ...containerIntent[intent],
      ...container,
    },
    iconContainer,
  };
};
