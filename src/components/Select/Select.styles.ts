import type { TextInputProps } from '../TextInput';

export const defaultConfig: TextInputProps['custom'] = {
  innerElements: {
    afterComponent: {
      spacing: {
        IconButton: {
          marginRight: '$space-component-padding-medium',
        },
      },
    },
  },
};
