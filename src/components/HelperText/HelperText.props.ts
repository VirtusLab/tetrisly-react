import { HelperTextConfig } from './HelperText.styles';
import { HelperTextIntent } from './HelperTextIntent.type';

export type HelperTextProps = {
  intent?: HelperTextIntent;
  counter?: {
    current: number;
    max: number;
  };
  hasBeforeIcon?: boolean;
  text: string;
  custom?: HelperTextConfig;
};
