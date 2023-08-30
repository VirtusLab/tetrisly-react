import { HelperTextConfig } from './HelperText.styles';
import { HelperTextIntent } from './HelperTextIntent.type';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type HelperTextProps = {
  intent?: HelperTextIntent;
  counter?: {
    current: number;
    max: number;
  };
  beforeIcon?: boolean;
  text: string;
  custom?: DeepPartial<HelperTextConfig>;
};
