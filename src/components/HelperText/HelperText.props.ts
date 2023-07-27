import { SystemProps } from '@xstyled/styled-components';

import { config } from './HelperText.styles';
import { HelperTextIntent } from './HelperTextIntent.type';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type HelperTextProps = {
  intent?: HelperTextIntent;
  counter?: {
    current: number;
    max: number;
  };
  beforeIcon?: boolean;
  text?: string;
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};
