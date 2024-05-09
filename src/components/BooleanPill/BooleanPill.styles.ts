import { BooleanPillState } from './BooleanPillState.type';

import { BaseProps } from '@/types';

export type BooleanPillConfig = {
  isSelected: BaseProps;
  hasAvatar: BaseProps;
  state?: Partial<
    Record<BooleanPillState, Record<'primary' | 'inverted', BaseProps>>
  >;
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  h: `$size-small`,
  padding: `$space-component-padding-xSmall $space-component-padding-medium`,
  gap: `$space-component-gap-small`,
  borderRadius: `$border-radius-large`,
  color: '$color-content-primary',
  borderWidth: '$border-width-small',
  borderColor: '$color-transparent',
  transition: true,
  transitionDuration: 200,
  outline: {
    focus: 'solid',
  },
  outlineColor: {
    _: '$color-interaction-focus-default',
    focus: '$color-interaction-focus-default',
  },
  outlineWidth: {
    focus: '$border-width-focus',
  },
  outlineOffset: 1,
  hasAvatar: {
    pl: '$space-component-padding-xSmall',
  },
  isSelected: {
    pl: '$space-component-padding-small',
    backgroundColor: '$color-interaction-background-formField',
    borderColor: {
      _: '$color-interaction-border-neutral-normal',
      hover: '$color-interaction-border-neutral-hover',
      active: '$color-interaction-border-neutral-active',
    },
  },
  state: {
    default: {
      primary: {
        backgroundColor: {
          _: '$color-interaction-neutral-subtle-normal',
          hover: '$color-interaction-neutral-subtle-hover',
          active: '$color-interaction-neutral-subtle-active',
        },
      },
      inverted: {
        backgroundColor: '$color-interaction-background-formField',
        borderColor: {
          _: '$color-interaction-border-neutral-normal',
          hover: '$color-interaction-border-neutral-hover',
          active: '$color-interaction-border-neutral-active',
        },
      },
    },
    disabled: {
      primary: {
        backgroundColor: '$color-interaction-neutral-subtle-normal',
        opacity: '$opacity-disabled',
        pointerEvents: 'none',
      },
      inverted: {
        backgroundColor: '$color-interaction-background-formField',
        borderColor: '$color-interaction-border-neutral-normal',
        opacity: '$opacity-disabled',
        pointerEvents: 'none',
      },
    },
  },
} as const satisfies BooleanPillConfig;

export const booleanPillStyles = {
  defaultConfig,
};
