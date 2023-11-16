import { SystemProps } from '@xstyled/styled-components';

import { HelperTextConfig } from '../HelperText/HelperText.styles';
import { LabelConfig } from '../Label/Label.styles';

import { BaseProps } from '@/types/BaseProps';

export type CheckboxGroupConfig = {
  innerElements?: {
    checkboxContainer?: SystemProps;
    label?: LabelConfig;
    helperText?: HelperTextConfig;
  };
} & BaseProps;

export const defaultConfig = {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space-component-gap-small',
  innerElements: {
    checkboxContainer: {
      display: 'grid',
      gap: '$space-component-gap-small $space-component-gap-large',
    },
    label: {},
    helperText: {},
  },
} satisfies CheckboxGroupConfig;

export const checkboxGroupStyles = {
  defaultConfig,
};
