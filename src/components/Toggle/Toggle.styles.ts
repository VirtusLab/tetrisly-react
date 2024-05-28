import { SystemProps } from '@xstyled/styled-components';

import { HelperTextConfig } from '../HelperText/HelperText.styles';

import { BaseProps } from '@/types/BaseProps';

type ToggleSize = { size?: Record<'small' | 'large', BaseProps> };
export type ToggleConfig = {
  innerElements?: {
    toggle?: {
      input?: SystemProps;
      slider?: BaseProps & ToggleSize;
      toggleOval?: BaseProps & ToggleSize;
    };
    labelContainer?: BaseProps;
    label?: BaseProps;
    helperText?: HelperTextConfig;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$space-component-gap-xSmall',
  opacity: {
    _: 1,
    disabled: 0.5,
  },
  innerElements: {
    toggle: {
      toggleOval: {
        size: {
          large: {
            w: '36px',
            h: '20px',
          },
          small: {
            w: '28px',
            h: '16px',
          },
        },
        p: '$space-component-padding-2xSmall',
        backgroundColor: {
          _: '$color-interaction-disabled-normal',
          hover: '$color-interaction-disabled-hover',
          focus: '$color-interaction-disabled-focus',
          active: '$color-interaction-disabled-active',
          disabled: '$color-interaction-disabled-normal',
          selected: {
            _: '$color-interaction-default-normal',
            hover: '$color-interaction-default-hover',
            focus: '$color-interaction-default-focus',
            active: '$color-interaction-default-active',
            disabled: '$color-interaction-default-normal',
          },
          indeterminate: {
            _: '$color-interaction-default-normal',
            hover: '$color-interaction-default-hover',
            focus: '$color-interaction-default-focus',
            active: '$color-interaction-default-active',
            disabled: '$color-interaction-default-normal',
          },
        },
        transition: '0.2s',
        borderRadius: '100px',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        outlineColor: {
          focusWithin: '$color-interaction-focus-default',
        },
        outlineWidth: {
          focusWithin: '$border-width-focus',
        },
        outlineStyle: {
          focusWithin: 'solid',
        },
        outlineOffset: {
          focusWithin: '$border-width-small',
        },
      },
      slider: {
        size: {
          large: {
            w: {
              _: '16px',
              indeterminate: '15px',
            },
            h: {
              _: '16px',
              indeterminate: '1.5px',
            },
            transform: {
              selected: 'translateX(16px)',
              indeterminate: 'translateX(8px)',
            },
          },
          small: {
            w: {
              _: '12px',
              indeterminate: '10px',
            },
            h: {
              _: '12px',
              indeterminate: '1.5px',
            },
            transform: {
              selected: 'translateX(12px)',
              indeterminate: 'translateX(7px)',
            },
          },
        },
        transition: 'transform 0.2s ease-in-out',
        backgroundColor: '$color-whiteA-0',
        borderRadius: '$border-radius-full',
        borderWidth: '$border-width-small',
        borderStyle: '$border-style-solid',
        borderColor: '$color-border-defaultA',
        boxShadow: '$elevation-bottom-100',
        position: 'absolute',
      },
      input: {
        borderRadius: '100px',
        w: '100%',
        h: '100%',
        appearance: 'none',
        zIndex: 1,
        cursor: {
          _: 'pointer',
          disabled: 'default',
        },
      },
    },
    labelContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '$space-component-gap-medium',
      text: '$typo-body-medium',
      color: '$color-content-primary',
    },
    label: {
      cursor: {
        _: 'pointer',
        disabled: 'default',
      },
    },
    helperText: {
      paddingLeft: '$space-component-padding-2xLarge',
      cursor: 'default',
    },
  },
} satisfies ToggleConfig;

export const toggleStyles = {
  defaultConfig,
};
