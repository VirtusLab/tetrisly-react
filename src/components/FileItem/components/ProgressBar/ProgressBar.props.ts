import { ProgressBarConfig } from './ProgressBar.styles';

export type ProgressBarProps = {
  custom?: ProgressBarConfig;
  isInverted?: boolean;
  progressPercentage?: number;
};
