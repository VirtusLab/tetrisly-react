import type { BaseProps } from '@/types';

export type CardHeaderConfig = BaseProps & {
  innerElements?: {
    title?: BaseProps;
    content?: BaseProps;
    description?: BaseProps;
    beforeComponent?: BaseProps;
    actions?: BaseProps;
  };
};

export const cardHeaderConfig = {
  display: 'flex',
  w: '100%',
  py: '$space-component-padding-large',
  px: '$space-component-padding-2xLarge',
  alignItems: 'center',
  gap: '$space-component-gap-large',
  borderBottomWidth: '$border-width-small',
  borderStyle: '$border-style-solid',
  borderColor: '$color-border-defaultA',
  innerElements: {
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
} as const satisfies CardHeaderConfig;
