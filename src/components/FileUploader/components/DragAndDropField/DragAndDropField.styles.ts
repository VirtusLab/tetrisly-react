import type { BaseProps } from '@/types/BaseProps';

type ExtensionConfig = {
  common: BaseProps;
  dragOver: BaseProps;
  default: BaseProps;
  alert: BaseProps;
  disabled: BaseProps;
};

const dragOverConfig = {
  borderWidth: '$border-width-medium',
  borderStyle: '$border-style-solid',
  borderColor: '$color-interaction-border-selected',
  backgroundColor: '$color-interaction-default-subtle-normal',
} satisfies BaseProps;

const focusConfig = {
  outlineWidth: {
    focus: '$border-width-medium',
  },
  outlineStyle: {
    focus: '$border-style-solid',
  },
  outlineColor: {
    focus: '$color-interaction-focus-default',
  },
  outlineOffset: {
    focus: '$border-width-100',
  },
} satisfies BaseProps;

const disabledConfig = {
  cursor: 'no-drop',
  opacity: '$opacity-disabled',
  borderWidth: '$border-width-small',
  borderStyle: '$border-style-dashed',
  borderColor: '$color-interaction-border-neutral-normal',
} satisfies BaseProps;

export type DragAndDropFieldConfig = BaseProps & {
  innerElements: {
    icon: BaseProps;
    title: BaseProps;
    description: BaseProps;
  };

  notExtended: ExtensionConfig;
  extended: ExtensionConfig;
};

const notExtendedDefaultConfig = {
  borderWidth: '$border-width-small',
  borderStyle: '$border-style-dashed',
  borderColor: {
    _: '$color-interaction-border-neutral-normal',
    hover: '$color-interaction-border-hover',
  },
  ...focusConfig,
} satisfies BaseProps;

const notExtendedAlertConfig = {
  borderWidth: '$border-width-small',
  borderStyle: '$border-style-dashed',
  borderColor: '$color-interaction-border-alert',
  ...focusConfig,
} satisfies BaseProps;

const notExtendedConfig = {
  common: {
    px: '$space-component-padding-large',
    py: '$space-component-padding-small',
    flexDirection: 'row',
    gap: '$space-component-gap-small',
    justifyContent: 'center',
  },
  dragOver: dragOverConfig,
  default: notExtendedDefaultConfig,
  alert: notExtendedAlertConfig,
  disabled: disabledConfig,
} satisfies ExtensionConfig;

const extendedDefaultConfig = {
  borderWidth: '$border-width-small',
  borderStyle: '$border-style-dashed',
  borderColor: {
    _: '$color-interaction-border-neutral-normal',
    hover: '$color-interaction-border-hover',
  },
  ...focusConfig,
} satisfies BaseProps;

const extendedAlertConfig = {
  borderWidth: '$border-width-small',
  borderStyle: '$border-style-dashed',
  borderColor: '$color-interaction-border-alert',
  ...focusConfig,
} satisfies BaseProps;

const extendedConfig = {
  common: {
    padding: '$space-component-padding-2xLarge',
    flexDirection: 'column',
    gap: '$space-component-gap-large',
  },
  dragOver: dragOverConfig,
  default: extendedDefaultConfig,
  alert: extendedAlertConfig,
  disabled: disabledConfig,
} satisfies ExtensionConfig;

export const defaultConfig = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '$border-radius-large',
  background: '$color-interaction-background-formField',

  notExtended: notExtendedConfig,
  extended: extendedConfig,

  innerElements: {
    icon: {
      color: '$color-content-secondary',
    },
    title: {
      color: '$color-content-primary',
      text: '$typo-medium-175',
    },
    description: {
      color: '$color-content-secondary',
      text: '$typo-medium-150',
    },
  },
} satisfies DragAndDropFieldConfig;

export const dragAndDropFieldStyles = {
  defaultConfig,
};
