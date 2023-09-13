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
  display: 'flex',
  alignItems: 'center',
  h: 'medium',
  padding: 'component-padding-small component-padding-large',
  flexShrink: 0,
  ring: 'small',
  ringColor: {
    _: 'interaction-border-neutral-normal',
    hoverWithoutButton: 'interaction-border-hover',
    alert: 'interaction-border-alert',
  },
  borderRadius: 'large',
  opacity: {
    disabled: 'disabled',
  },
  outlineStyle: {
    '&:has(input:focus)': 'solid',
  },
  outlineColor: {
    focusWithin: 'interaction-focus-default',
  },
  outlineWidth: {
    '&:has(input:focus)': 'focus',
  },
  outlineOffset: {
    alert: 'focus',
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
    clearButton: {
      marginLeft: 'component-gap-small',
    },
    beforeComponent: {
      spacing: {
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
    },
    afterComponent: {
      spacing: {
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
  },
} satisfies TextInputConfig;
