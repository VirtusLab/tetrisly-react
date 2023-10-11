import { SearchInputProps } from '../SearchInput';

export const defaultConfig: SearchInputProps['custom'] = {
  display: 'inline-flex',
  h: '$size-small',
  padding: '$space-component-padding-xSmall $space-component-padding-small',
  backgroundColor: {
    hover: '$color-interaction-ghost-hover',
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
      minWidth: '50px',
      backgroundColor: 'unset',
      padding: 'unset',
      display: 'inline-block',
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
