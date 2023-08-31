import { StatusDotConfig } from './StatusDot.styles';
import { StatusDotAppearance } from './StatusDotAppearance.type';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type StatusDotProps = {
  appearance: StatusDotAppearance;
  stroked?: boolean;
  custom?: DeepPartial<StatusDotConfig>;
};
