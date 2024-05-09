import { BaseProps } from '@/types';

type InputConteinerConfig = BaseProps & {
  isValidationError: BaseProps;
};

export type TagInputConfig = BaseProps & {
  innerElements?: {
    input?: BaseProps;
    inputContainer?: InputConteinerConfig;
  };
};

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
  w: '320px',
  padding:
    '$space-component-padding-small $space-component-padding-large $space-component-padding-small $space-component-padding-small',
  flexShrink: 0,
  innerElements: {
    inputContainer: {
      w: '100%',
      h: '$size-medium',
      borderRadius: '$border-radius-large',
      border: '1px solid $color-interaction-border-neutral-normal',
      display: 'flex',
      gap: '$space-component-gap-small',
      alignItems: 'center',
      bg: '$color-interaction-background-formField',
      borderColor: '$color-interaction-border-neutral-normal',
      p: '$space-component-padding-small $space-component-padding-large $space-component-padding-small $space-component-padding-small',
      flexShrink: '0',
      ringInset: true,
      ring: '$border-width-small',
      ringColor: {
        _: '$color-interaction-border-neutral-normal',
        hoverWithoutButton: '$color-interaction-border-hover',
        alert: '$color-interaction-border-alert',
        focusWithin: '$color-interaction-neutral-subtle-normal',
      },
      outlineStyle: {
        '&:has(input:focus)': '$border-style-solid',
      },
      outlineColor: {
        focusWithin: '$color-interaction-focus-default',
      },
      outlineWidth: {
        '&:has(input:focus)': '$border-width-focus',
      },
      outlineOffset: {
        _: '1px',
        alert: '$border-width-focus',
      },
      transition: 'true',
      transitionDuration: '50',
      cursor: 'text',
      overflow: 'hidden',
      isValidationError: {
        ringColor: '$color-interaction-border-alert',
      },
    },
    input: {
      h: '100%',
      w: '100%',
      p: '0',
      flex: '1 1 auto',
      outline: 'none',
      text: '$typo-body-medium',
      color: {
        placeholder: '$color-content-tertiary',
      },
      backgroundColor: 'transparent',
      opacity: {
        placeholder: 1,
      },
    },
  },
} satisfies TagInputConfig;
