import { merge } from 'lodash';

import { SocialButtonProps } from './SocialButton.props';
import {
  SocialButtonAppearance,
  socialButtonConfig,
} from './SocialButton.styles';

export const stylesBuilder = (
  custom: SocialButtonProps['custom'],
  appearance: SocialButtonAppearance,
) => {
  const { appearance: appearances, ...baseStyles } = merge(
    socialButtonConfig,
    custom,
  );
  return [appearances?.[appearance], baseStyles] as const;
};
