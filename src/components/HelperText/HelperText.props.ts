import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';
import { IconName } from '@/utility-types/IconName';
import { SystemProps } from '@xstyled/styled-components';
import { config } from './HelperText.styles';
import { HelperTextIntent } from './HelperTextIntent.type';

export type HelperTextProps = {
  intent?: HelperTextIntent;
  counter?: {
    current: number;
    max: number;
  };
  beforeIcon?: IconName;
  text?: string;
  custom?: DeepPartial<SystemProps<Theme> & typeof config>
};
