import { IconPositionType, MetricsCardConfig } from './MetricsCard.styles';
import { InlineMetricsProps } from '../InlineMetrics';

export type TrendType = 'None' | 'Positive' | 'Negative';
export type IntentType = 'Neutral' | 'Positive' | 'Negative';

export type MetricsCardProps = {
  intent?: IntentType;
  iconPosition?: IconPositionType;
  hasTrend?: boolean;
  hasIcon?: boolean;
  hasMoreIcon?: boolean;
  custom?: MetricsCardConfig;
} & Omit<InlineMetricsProps, 'custom'>;
