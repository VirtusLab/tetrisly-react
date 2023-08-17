import { SystemProps } from '@xstyled/styled-components';

import { BaseProps } from '@/types/BaseProps';

type Config = {
  innerComponents: {
    radioButton: SystemProps;
    label: SystemProps;
    helperText: SystemProps;
  };
};

export const config = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 'component-gap-small',
  minWidth: '3xSmall',
  minHeight: '3xSmall',
  color: 'content-primary',
  opacity: {
    disabled: 'disabled',
  },
  pointerEvents: {
    disabled: 'none',
  },
  innerComponents: {
    radioButton: {
      appearance: 'none',
      display: 'flex',
      w: '16px',
      h: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      backgroundColor: 'interaction-background-formField',
      ring: {
        _: 'focus',
        checked: '5px',
      },
      borderRadius: 'full',
      ringInset: true,
      ringColor: {
        _: 'interaction-border-neutral-normal',
        hover: 'interaction-border-hover',
        checked: {
          _: 'interaction-default-normal',
          hover: 'interaction-default-hover',
        },
        alert: {
          _: 'interaction-border-alert',
          hover: 'interaction-border-alert',
        },
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
      outlineOffset: {
        focusWithin: 'small',
      },
      transition: true,
      transitionDuration: 200,
      cursor: 'pointer',
    },
    label: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'component-gap-small',
      cursor: 'pointer',
      color: 'content-primary',
      text: 'body-medium',
    },
    helperText: {
      paddingLeft: 'component-padding-2xLarge',
    },
  },
} as const satisfies BaseProps & Config;
