import type { HelperTextConfig } from '../HelperText/HelperText.styles';
import type { LabelConfig } from '../Label/Label.styles';

import type { BaseProps } from '@/types/BaseProps';

export type RadioButtonGroupConfig = {
  innerElements?: {
    radioButtonContainer?: BaseProps;
    label?: LabelConfig;
    helperText?: HelperTextConfig;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
  innerElements: {
    radioButtonContainer: {
      display: 'grid',
      gap: '$space-component-gap-small $space-component-gap-large',
    },
    label: {},
    helperText: {},
  },
} satisfies RadioButtonGroupConfig;

export const radioButtonGroupStyles = {
  defaultConfig,
};
