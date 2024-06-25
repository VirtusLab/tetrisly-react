import { MetricsCardProps } from './MetricsCard.props';
import { defaultConfig, IconPositionType } from './MetricsCard.styles';

import { mergeConfigWithCustom } from '@/services';

type StylesBuilderParams = {
  iconPosition: IconPositionType;
  custom: MetricsCardProps['custom'];
};

export const stylesBuilder = ({
  iconPosition,
  custom,
}: StylesBuilderParams) => {
  const {
    innerElements,
    iconPosition: position,
    ...restStyles
  } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  const containerStyles = { ...restStyles, ...position[iconPosition] };

  return {
    container: containerStyles,
    ...innerElements,
  };
};
