import { SocialButtonProps } from './SocialButton.props';
import { defaultConfig, SocialButtonAppearance } from './SocialButton.styles';

import { mergeConfigWithCustom } from '@/services';

export const stylesBuilder = (
  appearance: SocialButtonAppearance,
  custom: SocialButtonProps['custom'],
) => {
  const { appearance: appearances, ...baseStyles } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });
  return {
    ...appearances[appearance],
    ...baseStyles,
  };
};
