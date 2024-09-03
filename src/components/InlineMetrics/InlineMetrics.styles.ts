import type { TrendType } from './InlineMetrics.props';

import type { BaseProps } from '@/types/BaseProps';
import { IconName } from '@/utility-types/IconName';

export type InlineMetricsConfig = {
  innerElements: {
    label?: BaseProps;
    metric?: BaseProps;
    trendContainer?: BaseProps;
    trend?: { trend?: Partial<Record<TrendType, BaseProps>> } & BaseProps;
    icon?: BaseProps;
    trendValue?: BaseProps;
    referenceDate?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  w: 'fill',
  h: '',
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-medium',
  innerElements: {
    trendContainer: {
      display: 'flex',
      color: '$color-content-primary',
      gap: '$space-component-gap-medium',
    },
    label: {
      color: '$color-content-secondary',
      text: '$typo-body-medium',
    },
    metric: {
      text: '$typo-header-4xLarge',
      color: '$color-content-primary',
    },
    trend: {
      gap: '$space-component-gap-small',
      padding: '$space-component-padding-xSmall 0',
      display: 'flex',
      alignItems: 'center',
      trend: {
        None: {},
        Positive: {
          color: '$color-content-positive-secondary',
        },
        Negative: {
          color: '$color-content-negative-secondary',
        },
      },
    },
    icon: {
      display: 'flex',
    },
    trendValue: {
      text: '$typo-body-strong-medium',
      display: 'flex',
      alignItems: 'end',
    },
    referenceDate: {
      display: 'none',
    },
  },
} satisfies InlineMetricsConfig;

export const inlineMetricsStyles = {
  defaultConfig,
};

export const resolveIconName = (trend: TrendType) => {
  const iconConfig = {
    None: '20-minus',
    Positive: '20-trend-up',
    Negative: '20-trend-down',
  } satisfies Record<TrendType, IconName<20>>;

  return iconConfig[trend];
};
