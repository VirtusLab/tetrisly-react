import { StatusConfig } from './Status.styles';
import type { StatusAppearance } from './StatusAppearance.type';
import type { StatusEmphasis } from './StatusEmphasis.type';

export type StatusProps = {
  appearance?: StatusAppearance;
  custom?: StatusConfig;
  emphasis?: StatusEmphasis;
  label?: string;
};
