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
    container: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  position: 'relative',
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
      backgroundColor: '$color-background-inverted',
      color: '$color-content-primary-inverted',
      padding: '$space-component-padding-xSmall $space-component-padding-small',
      borderRadius: '$border-radius-medium',
      text: '$typo-body-small',
      minWidth: '20px',
      minHeight: '28px',
      w: 'max-content',
      maxWidth: '240px',
    },
    container: {
      position: 'absolute',
      alignContent: 'center',
      justifyContent: 'center',
      w: 'fit-content',
      transition: 'opacity .2s ease-in-out',
      display: 'inline-flex',
      zIndex: 1,
    },
  },
} satisfies TooltipConfig;

export const TooltipStyles = {
  defaultConfig,
};
