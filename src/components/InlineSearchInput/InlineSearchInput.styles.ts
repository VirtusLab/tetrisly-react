import { SearchInputProps } from '../SearchInput';

export const defaultConfig: SearchInputProps['custom'] = {
  display: 'inline-flex',
  h: 'small',
  padding: 'component-padding-xSmall component-padding-small',
  backgroundColor: {
    hover: 'interaction-ghost-hover',
  },
  ring: {
    _: 'unset',
  },
  ringColor: {
    _: 'unset',
  },
  innerComponents: {
    input: {
      w: 'unset',
      h: 'unset',
      minWidth: '50px',
      backgroundColor: 'unset',
      padding: 'unset',
      display: 'inline-block',
    },
  },
  spacing: {
    beforeComponent: {
      Icon: {
        marginLeft: 'component-padding-small',
      },
    },
  },
};
