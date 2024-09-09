import { MetricsCardConfig } from './MetricsCard.styles';
import { InlineMetricsProps } from '../InlineMetrics';
export type IconPositionType = 'Top' | 'Left';
export type IntentType = 'Neutral' | 'Positive' | 'Negative';
export type MetricsCardProps = {
    iconPosition?: IconPositionType;
    hasTrend?: boolean;
    hasIcon?: boolean;
    hasMoreIcon?: boolean;
    custom?: MetricsCardConfig;
} & Omit<InlineMetricsProps, 'custom'>;
