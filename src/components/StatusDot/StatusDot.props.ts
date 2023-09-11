import type { StatusDotConfig } from './StatusDot.styles';
import type { StatusDotAppearance } from './types';

export type StatusDotProps = {
  appearance?: StatusDotAppearance;
  stroked?: boolean;
  custom?: StatusDotConfig;
};
