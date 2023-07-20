import { IconName } from '@/utility-types/IconName';

export type HelperTextProps = {
  intent?: 'none' | 'alert' | 'success';
  counter?: {
    current: number;
    max: number;
  };
  beforeIcon?: IconName;
  text?: string;
};
