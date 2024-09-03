import { Icon } from '@virtuslab/tetrisly-icons';
import { MarginProps } from '@xstyled/styled-components';
import { type FC, useMemo } from 'react';

import { MetricsCardProps } from './MetricsCard.props';
import { stylesBuilder } from './stylesBuilder';
import { InlineMetrics } from '../InlineMetrics';
import { InlineMetricsConfig } from '../InlineMetrics/InlineMetrics.styles';

import { tet } from '@/tetrisly';

export const MetricsCard: FC<MetricsCardProps & MarginProps> = ({
  hasIcon = false,
  hasMoreIcon = false,
  hasTrend,
  metrics,
  label,
  trend = 'None',
  trendValue,
  iconPosition = 'Top',
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder({ iconPosition, custom }),
    [custom, iconPosition],
  );
  const isLeftPosition = iconPosition === 'Left';

  const customInlineMetrics: InlineMetricsConfig = {
    gap: '$space-component-gap-null',
    innerElements: {
      trendContainer: { ...styles.trendContainer },
      referenceDate: { ...styles.referenceDate },
      trend: { ...styles.trend, display: hasTrend ? 'flex' : 'none' },
    },
  };

  return (
    <tet.div {...styles.container} data-testid="metrics-card" {...restProps}>
      {hasIcon && (
        <tet.div
          marginBottom={isLeftPosition ? 0 : '$space-component-gap-xLarge'}
          marginRight={isLeftPosition ? '$space-component-gap-xLarge' : 0}
          {...styles.circle}
          data-testid="metrics-card-circle"
        >
          <Icon data-testid="metrics-card-wallet-icon" name="20-wallet" />
        </tet.div>
      )}
      <InlineMetrics
        metrics={metrics}
        label={label}
        trend={trend}
        trendValue={trendValue}
        custom={customInlineMetrics}
        data-testid="metrics-card-inline-metrics"
      />
      {hasMoreIcon && (
        <tet.div {...styles.moreIcon} data-testid="metrics-card-more-icon">
          <Icon
            data-testid="metrics-card-more-icon-svg"
            name="20-more-horizontal"
          />
        </tet.div>
      )}
    </tet.div>
  );
};
