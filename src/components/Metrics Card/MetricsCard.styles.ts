import type { BaseProps } from '@/types/BaseProps';

export type IconPositionType = 'Top' | 'Left';

export type MetricsCardConfig = {
  iconPosition?: Record<IconPositionType, BaseProps>;
  innerElements: {
    trendContainer?: BaseProps;
    circle?: BaseProps;
    referenceDate?: BaseProps;
    trend?: BaseProps;
    icon?: BaseProps;
    trendValue?: BaseProps;
    moreIcon?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  position: 'relative',
  border: '1px solid',
  borderColor: '$color-border-defaultA',
  borderRadius: '$border-radius-xLarge',
  padding: '$space-component-padding-2xLarge',
  display: 'flex',
  boxShadow: '$elevation-bottom-200',
  w: '480px',
  iconPosition: {
    Top: {
      flexDirection: 'column',
    },
    Left: {
      flexDirection: 'row',
    },
  },
  innerElements: {
    circle: {
      w: '$size-large',
      h: '$size-large',
      padding: '$space-component-padding-medium',
      border: '1px solid',
      borderColor: '$color-border-neutral-subtle',
      borderRadius: '24px',
    },
    trend: {},
    icon: {
      display: 'flex',
    },
    trendValue: {
      text: '$typo-body-strong-medium',
      display: 'flex',
      alignItems: 'end',
    },
    referenceDate: {
      display: 'block',
      text: '$typo-body-medium',
      color: '$color-content-secondary',
      marginLeft: '$space-component-padding-xSmall',
    },
    trendContainer: {
      flexDirection: 'column',
      alignSelf: 'flex-start',
      gap: '$space-component-gap-xLarge',
    },
    moreIcon: {
      position: 'absolute',
      color: '$color-action-neutral-normal',
      top: '$space-component-padding-2xLarge',
      right: '$space-component-padding-2xLarge',
    },
  },
} satisfies MetricsCardConfig;

export const metricsCardStyles = {
  defaultConfig,
};
