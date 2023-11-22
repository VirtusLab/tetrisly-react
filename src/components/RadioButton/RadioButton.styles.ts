import type { SystemProps } from '@xstyled/styled-components';

import type { HelperTextConfig } from '../HelperText/HelperText.styles';

import type { BaseProps } from '@/types/BaseProps';

export type RadioButtonConfig = {
  innerElements?: {
    radioButton?: SystemProps;
    label?: BaseProps;
    helperText?: HelperTextConfig;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$space-component-gap-xSmall',
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
    radioButton: {
      appearance: 'none',
      display: 'flex',
      w: '16px',
      h: '16px',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      backgroundColor: '$color-interaction-background-formField',
      borderRadius: '$border-radius-full',
      boxShadow: '0 0 #0000',
      ring: {
        _: '$border-width-focus',
        checked: '5px',
      },
      ringInset: true,
      ringColor: {
        _: '$color-interaction-border-neutral-normal',
        hover: '$color-interaction-border-hover',
        checked: {
          _: '$color-interaction-default-normal',
          hover: '$color-interaction-default-hover',
        },
        alert: {
          _: '$color-interaction-border-alert',
          hover: '$color-interaction-border-alert',
          checked: '$color-interaction-default-normal',
        },
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
      cursor: 'pointer',
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
      pl: '$space-component-padding-2xLarge',
    },
  },
} satisfies RadioButtonConfig;

export const radioButtonStyles = {
  defaultConfig,
};
