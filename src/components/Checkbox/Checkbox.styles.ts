import { SystemProps } from '@xstyled/styled-components';

import { Theme } from '@/theme';

type Config = {
  innerComponents: {
    checkbox: SystemProps;
    checkboxContainer: SystemProps;
    checkboxIcon: SystemProps;
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
    checkboxContainer: {
      position: 'relative',
    },
    checkbox: {
      appearance: 'none',
      display: 'block',
      w: '3xSmall',
      h: '3xSmall',
      backgroundColor: {
        _: 'interaction-background-formField',
        checked: {
          _: 'interaction-default-normal',
          hover: 'interaction-default-hover',
        },
        indeterminate: {
          _: 'interaction-default-normal',
          hover: 'interaction-default-hover',
        },
      },
      color: 'white',
      ring: 'focus',
      borderRadius: 'medium',
      ringInset: true,
      ringColor: {
        _: 'interaction-border-neutral-normal',
        hover: 'interaction-border-hover',
        checked: {
          _: 'interaction-ghost-normal',
          hover: 'interaction-ghost-normal',
        },
        alert: {
          _: 'interaction-border-alert',
          hover: 'interaction-border-alert',
        },
        indeterminate: 'transparent',
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
    checkboxIcon: {
      position: 'absolute',
      color: 'interaction-inverted-normal',
      left: 0,
      top: 0,
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
} as const satisfies SystemProps<Theme> & Config;
