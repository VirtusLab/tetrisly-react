import { InlineMetricsConfig } from './InlineMetrics.styles';

export type TrendType = 'None' | 'Positive' | 'Negative';

export type InlineMetricsProps = {
  metrics?: string;
  label?: string;
  trend?: TrendType;
  trendValue?: string;
  custom?: InlineMetricsConfig;
};
