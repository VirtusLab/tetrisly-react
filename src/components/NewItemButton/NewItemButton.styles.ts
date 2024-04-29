import { NewItemButtonState } from './NewItemButtonState.type';

import type { BaseProps } from '@/types/BaseProps';

export type NewItemButtonConfig = {
  state?: Partial<Record<NewItemButtonState, BaseProps>>;
  innerElements?: {
    text?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$space-component-gap-small',
  h: '120px',
  w: 'fit-content',
  minWidth: '120px',
  borderWidth: '$border-width-small',
  borderStyle: 'dashed',
  borderRadius: '$border-radius-large',
  padding: '$space-component-padding-xLarge',
  text: '$typo-body-medium',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color: '$color-action-neutral-normal',
  backgroundColor: '$color-interaction-background-formField',
  outlineOffset: 1,
  outlineWidth: '$border-width-small',
  outlineColor: '$color-interaction-focus-default',
  state: {
    normal: {
      borderColor: {
        _: '$color-border-neutral-subtle',
        hover: '$color-interaction-border-hover',
      },
    },
    alert: {
      borderColor: '$color-interaction-border-alert',
    },
    disabled: {
      borderColor: '$color-border-neutral-subtle',
      opacity: 0.5,
      pointerEvents: 'none',
    },
  },
  innerElements: {
    text: {
      text: '$typo-body-medium',
      color: '$color-content-primary',
    },
  },
} as const satisfies NewItemButtonConfig;

export const newItemButtonStyles = {
  defaultConfig,
};
