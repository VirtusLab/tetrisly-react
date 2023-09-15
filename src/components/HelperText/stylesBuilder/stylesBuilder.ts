import { HelperTextProps } from '../HelperText.props';
import { defaultConfig } from '../HelperText.styles';
import { HelperTextIntent } from '../HelperTextIntent.type';

import { mergeConfigWithCustom } from '@/services';
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
  } = mergeConfigWithCustom({ defaultConfig, custom });

  const { iconContainer } = innerElements;

  return {
    container: {
      ...containerIntent[intent],
      ...container,
    },
    iconContainer,
  };
};
