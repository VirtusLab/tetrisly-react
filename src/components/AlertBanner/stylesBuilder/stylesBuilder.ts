import { merge } from 'lodash';

import { AlertBannerProps } from '../AlertBanner.props';
import { defaultConfig } from '../AlertBanner.styles';
import { AlertBannerIntent } from '../types';

import { BaseProps } from '@/types/BaseProps';

type AlertBannerStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = (
  intent: AlertBannerIntent,
  custom: AlertBannerProps['custom'],
): AlertBannerStylesBuilder => {
  const { intent: intentStyles, ...restStyles } = merge(defaultConfig, custom);

  return {
    container: {
      ...intentStyles[intent],
      ...restStyles,
    },
  };
};
