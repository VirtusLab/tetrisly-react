import type { BaseProps } from '@/types/BaseProps';

export type DragAndDropFieldConfig = {
  extendedContainer?: BaseProps;
  icon?: BaseProps;
  link?: BaseProps;
  text?: BaseProps;
  caption?: BaseProps;
  state?: StateStyles;
} & BaseProps;

type StateStyles = {
  normal: BaseProps;
  hover: BaseProps;
  dragover: BaseProps;
  focus: BaseProps;
  alert: BaseProps;
  alertfocus: BaseProps;
  disabled: BaseProps;
};

const stateStyles: StateStyles = {
  hover: {
    borderColor: '$color-interaction-border-hover',
  },
  normal: {
    borderColor: {
      _: '$color-interaction-border-neutral-normal',
      hover: '$color-interaction-border-hover',
    },
    borderWidth: '$border-width-small',
    borderStyle: '$border-style-dashed',
    borderRadius: '$border-radius-medium',
    outlineStyle: {
      focus: 'solid',
    },
    outlineColor: {
      focus: '$color-interaction-border-hover',
    },
    outlineWidth: '$border-width-focus',
    outlineOffset: '$border-width-small',
    transition: true,
    transitionDuration: 200,
  },
  focus: {
    borderColor: {
      _: '$color-interaction-border-neutral-normal',
      hover: '$color-interaction-border-hover',
    },
    borderRadius: '$border-radius-medium',
    outlineStyle: 'solid',
    outlineColor: '$color-interaction-border-hover',
    outlineWidth: '$border-width-focus',
    outlineOffset: '$border-width-small',
    transition: true,
    transitionDuration: 200,
  },
  alert: {
    borderColor: {
      _: '$color-interaction-border-alert',
      hover: '$color-interaction-border-hover',
    },
    borderRadius: '$border-radius-medium',
    boxShadow: '0 0 #0000',
    ringColor: {
      hover: '$color-interaction-border-hover',
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
  alertfocus: {
    borderColor: {
      _: '$color-interaction-border-alert',
      hover: '$color-interaction-border-neutral-normal',
    },
    borderRadius: '$border-radius-medium',
    outlineStyle: 'solid',
    outlineColor: '$color-interaction-border-hover',
    outlineWidth: '$border-width-focus',
    outlineOffset: '$border-width-small',
    transition: true,
    transitionDuration: 200,
  },
  dragover: {
    borderWidth: '$border-width-medium',
    borderColor: '$color-interaction-border-selected',
    borderStyle: '$border-style-solid',
    backgroundColor: '$color-interaction-default-subtle-normal',
  },
  disabled: {
    opacity: '$opacity-disabled',
    color: '$color-content-secondary',
    borderColor: '$color-interaction-border-neutral-normal',
  },
};

export const defaultConfig = {
  w: 'fit-content',
  h: 'fit-content',
  padding: '$space-component-padding-small $space-component-padding-large',
  backgroundColor: '$color-interaction-background-formField',
  borderRadius: '$border-radius-large',
  borderWidth: '$border-width-small',
  borderStyle: '$border-style-dashed',
  borderColor: {
    _: '$color-interaction-border-neutral-normal',
    hover: stateStyles.hover.borderColor,
    focusWithin: '$color-interaction-border-neutral-normal',
    alert: '$color-interaction-alert-active',
    disabled: stateStyles.disabled.borderColor,
  },
  state: {
    alert: stateStyles.alert,
    alertfocus: stateStyles.alertfocus,
    disabled: stateStyles.disabled,
    dragover: stateStyles.dragover,
    focus: stateStyles.focus,
    hover: stateStyles.hover,
    normal: stateStyles.normal,
  },
  display: 'flex',
  gap: '$space-component-gap-small',
  extendedContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$space-component-gap-large',
    padding: '$space-component-padding-2xLarge',
  },
  icon: {
    color: '$color-content-secondary',
  },
  text: {
    color: '$color-content-primary',
    text: '$typo-body-medium',
    w: 'max-content',
  },
  link: {
    color: '$color-action-primary-normal',
    cursor: 'pointer',
    border: 'none',
  },
  caption: {
    text: '$typo-body-small',
    color: '$color-content-secondary',
  },
} satisfies DragAndDropFieldConfig;

export const dragAndDropFieldStyles = {
  defaultConfig,
};
