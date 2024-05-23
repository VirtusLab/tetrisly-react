import { BaseProps } from '@/types/BaseProps';

export type TooltipConfig = {
  innerElements?: {
    arrow: BaseProps & {
      right: BaseProps;
      left: BaseProps;
      top: BaseProps;
      bottom: BaseProps;
    };
    content: BaseProps;
    wrapper: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  alignContent: 'center',
  justifyContent: 'center',
  maxWidth: '240px',
  innerElements: {
    arrow: {
      right: {
        padding: '$space-component-padding-small 0',
        paddingLeft: '$space-component-padding-xSmall',
      },
      left: {
        padding: '$space-component-padding-small 0',
        paddingRight: '$space-component-padding-xSmall',
      },
      top: {
        padding: '0 $space-component-padding-small',
        paddingBottom: '$space-component-padding-xSmall',
      },
      bottom: {
        padding: '0 $space-component-padding-small',
        paddingTop: '$space-component-padding-xSmall',
      },
    },
    content: {
      background: '#272e35', // TODO change when there is this color in ITheme
      color: '$color-content-primary-inverted',
      padding:
        '$space-component-padding-xSmall $space-component-padding-small $space-component-padding-xSmall $space-component-padding-small',
      borderRadius: '$border-radius-medium',
      text: '$typo-body-small',
    },
    wrapper: {
      display: 'inline-flex',
    },
  },
} satisfies TooltipConfig;

export const TooltipStyles = {
  defaultConfig,
};
