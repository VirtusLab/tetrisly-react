import { Icon } from '@virtuslab/tetrisly-icons';
import { MarginProps } from '@xstyled/styled-components';
import { type FC, useMemo } from 'react';

import { InlineMetricsProps } from './InlineMetrics.props';
import { resolveIconName } from './InlineMetrics.styles';
import { stylesBuilder } from './stylesBuilder';
import { Label } from '../Label';

import { tet } from '@/tetrisly';

export const InlineMetrics: FC<InlineMetricsProps & MarginProps> = ({
  metrics,
  label,
  trend = 'None',
  trendValue,
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder({ trend, custom }),
    [trend, custom],
  );

  const iconName = useMemo(() => resolveIconName(trend), [trend]);

  return (
    <tet.div {...styles.container} data-testid="inline-metrics" {...restProps}>
      {label && (
        <Label
          label={label}
          {...styles.label}
          data-testid="inline-metrics-label"
        />
      )}

      <tet.div
        {...styles.trendContainer}
        data-testid="inline-metrics-trend-container"
      >
        <tet.div {...styles.metric} data-testid="inline-metrics-metric">
          {metrics}
        </tet.div>
        <tet.div {...styles.trend} data-testid="inline-metrics-trend">
          <Icon {...styles.icon} name={iconName} />
          <tet.span
            {...styles.trendValue}
            data-testid="inline-metrics-trend-value"
          >
            {trendValue}
          </tet.span>
        </tet.div>
      </tet.div>
    </tet.div>
  );
};
