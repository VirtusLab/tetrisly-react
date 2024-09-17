import { SearchInputProps } from '../SearchInput';

export const defaultConfig: SearchInputProps['custom'] = {
  position: 'relative',
  display: 'inline-flex',
  w: 'auto',
  h: '$size-small',
  padding: '$space-component-padding-xSmall $space-component-padding-small',
  backgroundColor: {
    hover: {
      _: '$color-interaction-ghost-hover',
      focusWithin: '$color-interaction-background-formField',
    },
  },
  ring: {
    _: 'unset',
  },
  ringColor: {
    _: 'unset',
  },
  innerElements: {
    input: {
      w: 'unset',
      h: 'unset',
      minWidth: '30px',
      backgroundColor: 'transparent',
      padding: 0,
      display: 'inline-block',
    },
    clearButton: {
      right: '$space-component-padding-small',
    },
    beforeComponent: {
      spacing: {
        Icon: {
          marginLeft: '$space-component-padding-small',
        },
      },
    },
  },
};

export const inlineSearchInputStyles = {
  defaultConfig,
};
