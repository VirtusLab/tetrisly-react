import { BaseProps } from '@/types/BaseProps';

export type TooltipConfig = {
  innerElements?: {
    arrow: {
      // tooltipPosition: Partial<
      //   Record<
      //     TooltipPositionType,
      //     { arrowheadPosition?: Partial<Record<'start' | 'middle' | 'end', BaseProps>> }
      //   >
      // >;
    } & BaseProps;
    content: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  alignContent: 'center',
  justifyContent: 'center',
  position: 'relative',
  innerElements: {
    arrow: {
      position: 'absolute',
      display: 'flex',
      alignSelf: 'center',
      color: '#272e35', // there is no such color in ITheme
    },
    content: {
      h: '28px',
      background: '#272e35', // there is no such color in ITheme
      // background: 'rgba(20, 20, 20, 0.3)', // there is no such color in ITheme
      color: '$color-content-primary-inverted',
      padding:
        '$space-component-padding-xSmall $space-component-padding-small $space-component-padding-xSmall $space-component-padding-small',
      gap: '0px',
      borderRadius: '$border-radius-medium',
      opacity: '0px',
      fontFamily: 'Inter',
      fontSize: '12px',
      // fontWeight: 450,
      // lineHeight: "$dimension-250",
      letterSpacing: '0.02em',
      // textAlign: "center",
    },
  },
} satisfies TooltipConfig;

export const TooltipStyles = {
  defaultConfig,
};
