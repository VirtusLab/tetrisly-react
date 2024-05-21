import { BaseProps } from '@/types/BaseProps';

export type TooltipConfig = {
  innerElements?: {
    arrow: BaseProps;
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
      color: '$color-content-primary-inverted',
      padding:
        '$space-component-padding-xSmall $space-component-padding-small $space-component-padding-xSmall $space-component-padding-small',
      borderRadius: '$border-radius-medium',
      text: '$typo-body-small',
    },
  },
} satisfies TooltipConfig;

export const TooltipStyles = {
  defaultConfig,
};
