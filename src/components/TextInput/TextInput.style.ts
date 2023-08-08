import { SystemProps } from '@xstyled/styled-components';

import { Theme } from '@/theme';

type Config = {
  innerComponents: Record<'input' | 'icon' | 'text', SystemProps>;
};

export const config = {
  display: 'flex',
  alignItems: 'center',
  h: 'medium',
  padding: 'component-padding-small',
  gap: 'component-gap-small',
  flexShrink: 0,
  ring: '100',
  ringColor: {
    _: 'interaction-border-neutral-normal',
    hover: 'interaction-border-hover',
    focus: 'interaction-focus-default',
    // active: 'action-outline-active',
    // selected: 'action-outline-selected',
    alert: 'interaction-border-alert',
  },
  borderRadius: 'medium',
  opacity: {
    disabled: 'disabled',
  },
  outlineStyle: {
    focusWithin: 'solid',
  },
  outlineColor: {
    focusWithin: 'interaction-focus-default',
  },
  outlineWidth: {
    focusWithin: 'focus',
  },
  outlineOffset: 2,
  transition: true,
  transitionDuration: 200,
  cursor: 'text',
  pointerEvents: {
    disabled: 'none',
  },
  innerComponents: {
    input: {
      w: '100%',
      h: '100%',
      outline: 'none',
      text: 'body-medium',
      color: {
        placeholder: 'content-tertiary',
      },
    },
    icon: {
      color: 'content-secondary',
    },
    text: {
      text: 'body-medium',
      color: 'content-secondary',
    },
  },
} as const satisfies SystemProps<Theme> & Config;
