import { InlineMetricsProps, TrendType } from './InlineMetrics.props';
import { defaultConfig } from './InlineMetrics.styles';

import { mergeConfigWithCustom } from '@/services';

type StylesBuilderParams = {
  trend: TrendType;
  custom: InlineMetricsProps['custom'];
};

export const stylesBuilder = ({ trend, custom }: StylesBuilderParams) => {
  const { innerElements, ...restStyles } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });
  const { trend: trendContainer } = innerElements;
  const { trend: trendStyles, ...restTrendStyles } = trendContainer;

  const trendContainerStyles = { ...trendStyles[trend], ...restTrendStyles };

  return {
    container: restStyles,
    ...innerElements,
    trend: trendContainerStyles,
  };
};
