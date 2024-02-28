import type { BaseProps } from '@/types/BaseProps';

export type CardHeaderConfig = {
  title?: BaseProps;
  content?: BaseProps;
  description?: BaseProps;
  beforeComponent?: BaseProps;
  actions?: BaseProps;
} & BaseProps;

export type CardContentConfig = BaseProps;

export type CardFooterConfig = {
  actions?: BaseProps;
} & BaseProps;

export type CardConfig = BaseProps & {
  innerElements?: {
    header?: CardHeaderConfig;
    content?: CardContentConfig;
    footer?: CardFooterConfig;
  };
};

export const cardConfig = {
  display: 'flex',
  w: 'fit-content',
  p: '$space-component-padding-null',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$space-component-padding-null',
  borderRadius: '$border-radius-xLarge',
  bg: '$color-background-default',
  boxShadow: '$elevation-bottom-200',
  overflow: 'hidden',
  innerElements: {
    header: {
      display: 'flex',
      w: '100%',
      py: '$space-component-padding-large',
      px: '$space-component-padding-2xLarge',
      alignItems: 'center',
      gap: '$space-component-gap-large',
      borderBottomWidth: '$border-width-small',
      borderStyle: '$border-style-solid',
      borderColor: '$color-border-defaultA',
      beforeComponent: {
        display: 'flex',
        padding: '$space-component-padding-null',
        alignItems: 'center',
        gap: '$space-component-gap-null',
      },
      content: {
        display: 'flex',
        padding: '$space-component-padding-null',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '$space-component-padding-null',
        flex: '1 0 0',
      },
      title: {
        color: '$color-content-primary',
        text: '$typo-body-strong-large',
      },
      description: {
        color: '$color-content-secondary',
        text: '$typo-body-medium',
      },
      actions: {
        display: 'flex',
        padding: '$space-component-padding-null',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '$space-component-gap-large',
      },
    },
    content: { padding: '$space-component-padding-2xLarge', w: '100%' },
    footer: {
      display: 'flex',
      px: '$space-component-padding-medium',
      pb: '$space-component-padding-medium',
      w: '100%',
      actions: {
        w: '100%',
        display: 'flex',
        padding: '$space-component-padding-null',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '$space-component-gap-small',
      },
    },
  },
} as const satisfies CardConfig;
