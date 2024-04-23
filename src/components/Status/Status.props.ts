import { StatusConfig } from './Status.styles';
import type { StatusAppearance } from './StatusAppearance.type';
import { StatusEmphasis } from './StatusEmphasis.type';

type Status = string;

export type StatusProps = {
  appearance?: StatusAppearance;
  custom?: StatusConfig;
  emphasis?: StatusEmphasis;
  label?: Status;
};
