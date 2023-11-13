import type { BaseProps } from '@/types/BaseProps';

export type TagConfig = {
  hasOnClick?: BaseProps;
  innerElements?: {
    label: BaseProps;
    closeButton?: BaseProps;
    beforeComponent?: {
      avatar?: BaseProps;
    };
  };
} & BaseProps;

const backgroundColor = {
  hover: '$color-interaction-neutral-subtle-hover',
  active: '$color-interaction-neutral-subtle-active',
  focus: '$color-interaction-neutral-subtle-normal',
};

export const defaultConfig = {
  display: 'inline-flex',
  h: '$size-xSmall',
  alignItems: 'center',
  borderRadius: '$border-radius-medium',
  backgroundColor: '$color-interaction-neutral-subtle-normal',
  opacity: {
    disabled: '$opacity-disabled',
  },
  cursor: 'default',
  outlineColor: {
    focus: '$color-interaction-focus-default',
  },
  transitionDuration: 50,
  color: '$color-content-primary',
  hasOnClick: {
    backgroundColor: {
      _: '$color-interaction-neutral-subtle-normal',
      disabled: '$color-interaction-neutral-subtle-normal',
      selected: {
        _: '$color-interaction-neutral-subtle-selected',
        ...backgroundColor,
      },
      ...backgroundColor,
    },
    cursor: {
      _: 'pointer',
      disabled: 'default',
    },
  },
  innerElements: {
    label: {
      mx: '$space-component-padding-small',
      text: '$typo-body-medium',
    },
    closeButton: {
      mr: '$space-component-padding-xSmall',
      h: '$size-2xSmall',
      w: '$size-2xSmall',
      opacity: {
        disabled: '$opacity-100',
      },
    },
    beforeComponent: {
      avatar: {
        ml: '$space-component-padding-2xSmall',
      },
    },
  },
} satisfies TagConfig;
