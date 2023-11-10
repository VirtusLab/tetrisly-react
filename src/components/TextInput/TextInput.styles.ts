import { BaseProps } from '@/types/BaseProps';

export type TextInputConfig = {
  innerElements?: {
    input?: BaseProps;
    icon?: BaseProps;
    text?: BaseProps;
    clearButton?: BaseProps;
    beforeComponent?: {
      spacing?: Partial<
        Record<'Icon' | 'Avatar' | 'Prefix' | 'Dropdown', BaseProps>
      >;
    } & BaseProps;
    afterComponent?: {
      spacing?: Partial<
        Record<
          'Icon' | 'Sufix' | 'Button' | 'IconButton' | 'Dropdown',
          BaseProps
        >
      >;
    } & BaseProps;
  };
} & BaseProps;

export const defaultConfig = {
  bg: '$color-interaction-background-formField',
  display: 'flex',
  alignItems: 'center',
  h: '$size-medium',
  padding: '$space-component-padding-small $space-component-padding-large',
  flexShrink: 0,
  ringInset: true,
  ring: '$border-width-small',
  ringColor: {
    _: '$color-interaction-border-neutral-normal',
    hoverWithoutButton: '$color-interaction-border-hover',
    alert: '$color-interaction-border-alert',
  },
  borderRadius: '$border-radius-large',
  opacity: {
    disabled: '$opacity-disabled',
  },
  outlineStyle: {
    '&:has(input:focus)': 'solid',
  },
  outlineColor: {
    focusWithin: '$color-interaction-focus-default',
  },
  outlineWidth: {
    '&:has(input:focus)': '$border-width-focus',
  },
  outlineOffset: {
    alert: '$border-width-focus',
  },
  transition: true,
  transitionDuration: 50,
  cursor: 'text',
  pointerEvents: {
    disabled: 'none',
  },
  innerElements: {
    input: {
      w: '100%',
      h: '100%',
      outline: 'none',
      text: '$typo-body-medium',
      color: {
        placeholder: '$color-content-tertiary',
      },
      backgroundColor: '$color-interaction-background-formField',
    },
    icon: {
      color: '$color-content-secondary',
    },
    text: {
      text: '$typo-body-medium',
      color: '$color-content-secondary',
    },
    clearButton: {
      marginLeft: '$space-component-gap-small',
    },
    beforeComponent: {
      spacing: {
        Icon: {
          marginLeft: '$space-component-padding-medium',
          marginRight: '$space-component-padding-small',
        },
        Avatar: {
          margin: '0 $space-component-padding-small',
        },
        Prefix: {
          margin: '0 $space-component-padding-large',
        },
        Dropdown: {
          marginLeft: '$space-component-padding-xSmall',
          marginRight: '$space-component-padding-small',
        },
      },
    },
    afterComponent: {
      spacing: {
        Icon: {
          marginLeft: '$space-component-padding-small',
          marginRight: '$space-component-padding-large',
        },
        Sufix: {
          marginLeft: '$space-component-padding-small',
          marginRight: '$space-component-padding-large',
        },
        Button: {
          marginLeft: '$space-component-padding-small',
          marginRight: '$space-component-padding-xSmall',
        },
        IconButton: {
          marginLeft: '$space-component-padding-small',
          marginRight: '$space-component-padding-xSmall',
        },
        Dropdown: {
          marginLeft: '$space-component-padding-small',
          marginRight: '$space-component-padding-xSmall',
        },
      },
    },
  },
} satisfies TextInputConfig;
