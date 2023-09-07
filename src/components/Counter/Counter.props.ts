import { CounterConfig } from './Counter.styles';
import type { CounterAppearance } from './types';

import type { Emphasis } from '@/types/Emphasis';

export type CounterProps = {
  number: number | string;
  appearance?: CounterAppearance;
  emphasis?: Emphasis;
  custom?: CounterConfig;
};
