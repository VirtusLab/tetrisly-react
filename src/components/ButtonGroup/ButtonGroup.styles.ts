import { BaseProps } from '@/types';

export type ButtonGroupConfig = {
  button: {
    size: {
      medium: BaseProps;
      small: BaseProps;
    };
  } & BaseProps;
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  button: {
    color: {
      _: '$color-action-neutral-normal',
      hover: '$color-action-neutral-hover',
    },
    backgroundColor: {
      _: '$color-action-inverted-normal',
      active: '$color-action-ghost-active',
      hover: '$color-action-ghost-hover',
      selected: '$color-action-ghost-selected',
    },
    ringColor: '$color-action-outline-normal',
    size: {
      // TODO think if it can be done by passing size prop to a button component
      medium: {
        h: '$size-medium',
        px: '$space-component-padding-large',
      },
      small: {
        h: '$size-small',
        px: '$space-component-padding-medium',
      },
    },
    borderRadius: {
      first: `$border-radius-large 0px 0px $border-radius-large`,
      last: `0px $border-radius-large $border-radius-large 0px`,
    },
    transition: true,
    transitionDuration: 200,
  },
} as const satisfies ButtonGroupConfig;

export const buttonGroupStyles = {
  defaultConfig,
};
