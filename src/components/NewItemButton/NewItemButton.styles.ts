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
  minH: '120px',
  minWidth: '120px',
  h: '100%',
  w: '100%',
  borderWidth: '$border-width-small',
  borderStyle: '$border-style-dashed',
  borderRadius: '$border-radius-large',
  padding: '$space-component-padding-xLarge',
  text: '$typo-body-medium',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color: '$color-action-neutral-normal',
  backgroundColor: '$color-interaction-background-formField',
  transition: true,
  transitionDuration: 200,
  outline: {
    focus: 'solid',
  },
  outlineColor: {
    focus: '$color-interaction-focus-default',
  },
  outlineWidth: {
    focus: '$border-width-focus',
  },
  outlineOffset: 1,
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
      opacity: '$opacity-disabled',
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
