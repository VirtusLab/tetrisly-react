import type { BaseProps } from '@/types/BaseProps';

export type DragAndDropSelectorConfig = BaseProps & {
  innerElements: {
    icon: BaseProps;
    title: BaseProps;
    description: BaseProps;
  };
};

export const defaultConfig = {
  display: 'flex',
  padding: '$space-component-padding-2xLarge',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$space-component-gap-large',
  alignSelf: 'stretch',
  borderRadius: '$border-radius-large',
  borderWidth: '1px',
  borderStyle: 'dashed',
  borderColor: '$color-interaction-border-neutral-normal',
  background: '$color-interaction-background-formField',
  innerElements: {
    icon: {},
    title: {
      color: '$color-content-primary',
      fontSize: '14px',
      fontWeight: '$font-weight-450',
    },
    description: {
      color: '$color-content-secondary',
      fontSize: '12px',
      fontWeight: '$font-weight-450',
    },
  },
} satisfies DragAndDropSelectorConfig;

export const dragAndDropSelectorStyles = {
  defaultConfig,
};
