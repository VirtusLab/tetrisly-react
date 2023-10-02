import { BaseProps } from '@/types';

export type TagConfig = {
  hasOnClick?: BaseProps;
  innerElements?: {
    label: BaseProps;
    closeButton?: BaseProps;
  };
  beforeComponent: {
    avatar?: BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  h: 'xSmall',
  alignItems: 'center',
  borderRadius: 'medium',
  backgroundColor: 'interaction-neutral-subtle-normal',
  opacity: {
    disabled: 50,
  },
  cursor: 'default',
  outlineColor: {
    focus: 'interaction-focus-default',
  },
  transitionDuration: 50,
  hasOnClick: {
    backgroundColor: {
      _: 'interaction-neutral-subtle-normal',
      hover: 'interaction-neutral-subtle-hover',
      active: 'interaction-neutral-subtle-active',
      focus: 'interaction-neutral-subtle-normal',
      selected: 'interaction-neutral-subtle-selected',
      disabled: 'interaction-neutral-subtle-normal',
    },
    cursor: {
      _: 'pointer',
      disabled: 'default',
    },
  },
  innerElements: {
    label: {
      mx: 'component-padding-small',
    },
    closeButton: {
      mr: 'component-padding-xSmall',
      h: '2xSmall',
      w: '2xSmall',
      opacity: {
        disabled: 100,
      },
    },
  },
  beforeComponent: {
    avatar: {
      ml: 'component-padding-2xSmall',
    },
  },
};
