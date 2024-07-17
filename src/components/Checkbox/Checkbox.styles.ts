import { SystemProps } from '@xstyled/styled-components';

import { HelperTextConfig } from '../HelperText/HelperText.styles';

import { BaseProps } from '@/types/BaseProps';

export type CheckboxConfig = {
  innerElements?: {
    input?: SystemProps;
    checkboxContainer?: BaseProps;
    checkboxIcon?: BaseProps;
    label?: BaseProps;
    helperText?: HelperTextConfig;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$space-component-gap-xSmall',
  w: 'max-content',
  minWidth: '$size-3xSmall',
  minHeight: '$size-3xSmall',
  color: '$color-content-primary',
  opacity: {
    disabled: '$opacity-disabled',
  },
  pointerEvents: {
    disabled: 'none',
  },
  innerElements: {
    checkboxContainer: {
      position: 'relative',
      cursor: 'pointer',
    },
    input: {
      appearance: 'none',
      display: 'block',
      w: '$size-3xSmall',
      h: '$size-3xSmall',
      pointerEvents: 'none',
      backgroundColor: {
        _: '$color-interaction-background-formField',
        checked: {
          _: '$color-interaction-default-normal',
          hover: '$color-interaction-default-hover',
        },
        indeterminate: {
          _: '$color-interaction-default-normal',
          hover: '$color-interaction-default-hover',
        },
      },
      borderRadius: '$border-radius-medium',
      boxShadow: '0 0 #0000',
      ring: '$border-width-focus',
      ringInset: true,
      ringColor: {
        _: '$color-interaction-border-neutral-normal',
        hover: '$color-interaction-border-hover',
        checked: {
          _: '$color-interaction-ghost-normal',
          hover: '$color-interaction-ghost-normal',
        },
        alert: {
          _: '$color-interaction-border-alert',
          hover: '$color-interaction-border-alert',
          checked: '$color-interaction-ghost-normal',
        },
        indeterminate: 'transparent',
      },
      outlineStyle: {
        focusWithin: 'solid',
      },
      outlineColor: {
        focusWithin: '$color-interaction-focus-default',
      },
      outlineWidth: {
        focusWithin: '$border-width-focus',
      },
      outlineOffset: {
        focusWithin: '$border-width-small',
      },
      transition: true,
      transitionDuration: 200,
    },
    checkboxIcon: {
      position: 'absolute',
      color: '$color-interaction-inverted-normal',
      w: '$size-3xSmall',
      h: '$size-3xSmall',
      left: 0,
      top: 0,
    },
    label: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '$space-component-gap-small',
      cursor: 'pointer',
      color: '$color-content-primary',
      text: '$typo-body-medium',
    },
    helperText: {
      paddingLeft: '$space-component-padding-2xLarge',
    },
  },
} satisfies CheckboxConfig;

export const checkboxStyles = {
  defaultConfig,
};
