import { SystemProps } from '@xstyled/styled-components';

import { Theme } from '@/theme';

type Config = {
  innerComponents: Record<'input' | 'icon' | 'text', SystemProps>;
  spacing:
    | Record<
        'beforeComponent',
        Record<'Icon' | 'Avatar' | 'Prefix' | 'Dropdown', SystemProps>
      >
    | Record<
        'afterComponent',
        Record<
          'Icon' | 'Sufix' | 'Button' | 'IconButton' | 'Dropdown',
          SystemProps
        >
      >;
};

export const config = {
  display: 'flex',
  alignItems: 'center',
  h: 'medium',
  padding: 'component-padding-small component-padding-large',
  flexShrink: 0,
  ring: '100',
  ringColor: {
    _: 'interaction-border-neutral-normal',
    hover: 'interaction-border-hover',
    focus: 'interaction-focus-default',
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
      backgroundColor: 'interaction-background-formField',
    },
    icon: {
      color: 'content-secondary',
    },
    text: {
      text: 'body-medium',
      color: 'content-secondary',
    },
  },
  spacing: {
    beforeComponent: {
      Icon: {
        marginLeft: 'component-padding-medium',
        marginRight: 'component-padding-small',
      },
      Avatar: {
        margin: '0 component-padding-small',
      },
      Prefix: {
        margin: '0 component-padding-large',
      },
      Dropdown: {
        marginLeft: 'component-padding-xSmall',
        marginRight: 'component-padding-small',
      },
    },
    afterComponent: {
      Icon: {
        marginLeft: 'component-padding-small',
        marginRight: 'component-padding-large',
      },
      Sufix: {
        marginLeft: 'component-padding-small',
        marginRight: 'component-padding-large',
      },
      Button: {
        marginLeft: 'component-padding-small',
        marginRight: 'component-padding-xSmall',
      },
      IconButton: {
        marginLeft: 'component-padding-small',
        marginRight: 'component-padding-xSmall',
      },
      Dropdown: {
        marginLeft: 'component-padding-small',
        marginRight: 'component-padding-xSmall',
      },
    },
  },
} as const satisfies SystemProps<Theme> & Config;
