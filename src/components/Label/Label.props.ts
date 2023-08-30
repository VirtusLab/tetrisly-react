import { LabelConfig } from './Label.styles';
// import { ButtonProps } from '../Button';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type LabelProps = {
  label: string;
  // action?: ButtonProps<'bare'>;
  tooltip?: boolean;
  optional?: string;
  custom?: DeepPartial<LabelConfig>;
};
