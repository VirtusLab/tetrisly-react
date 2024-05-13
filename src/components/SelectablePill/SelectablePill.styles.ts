import { SelectablePillState } from './SelectablePillState.type';

import { BaseProps } from '@/types';

export type SelectablePillConfig = {
  isSelected: BaseProps;
  state?: Partial<
    Record<SelectablePillState, Record<'primary' | 'inverted', BaseProps>>
  >;
  hasIcon?: BaseProps;
  hasAvatar?: BaseProps;
  hasPrefix?: BaseProps;
  innerElements?: {
    icon?: BaseProps;
    actionIcon?: BaseProps;
    prefix?: BaseProps;
    contentContainer?: Record<'small' | 'xSmall', BaseProps>;
    textContainer?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  h: '$size-small',
  padding: '$space-component-padding-xSmall $space-component-padding-small',
  pl: '$space-component-padding-medium',
  gap: '$space-component-gap-small',
  borderRadius: '$border-radius-large',
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
  hasIcon: {
    pl: '$space-component-padding-small',
  },
  hasPrefix: {
    pl: '$space-component-padding-medium',
  },
  hasAvatar: {
    pl: '$space-component-padding-xSmall',
  },
  isSelected: {
    backgroundColor: '$color-interaction-background-formField',
    borderColor: {
      _: '$color-interaction-border-neutral-normal',
      hover: '$color-interaction-border-neutral-hover',
      active: '$color-interaction-border-neutral-active',
    },
  },
  innerElements: {
    icon: {
      color: '$color-content-secondary',
    },
    actionIcon: {
      color: '$color-action-neutral-normal',
    },
    prefix: {
      text: '$typo-body-medium',
      color: '$color-content-secondary',
    },
    textContainer: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '$space-component-gap-xSmall',
    },
    contentContainer: {
      xSmall: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '$space-component-gap-xSmall',
      },
      small: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '$space-component-gap-small',
      },
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
} as const satisfies SelectablePillConfig;

export const selectablePillStyles = {
  defaultConfig,
};
