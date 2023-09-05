import { merge } from 'lodash';

import { CounterConfig, defaultConfig } from '../Counter.styles';
import { CounterAppearance } from '../types';

import { Emphasis } from '@/types/Emphasis';

export const stylesBuilder = (
  appearance: CounterAppearance,
  emphasis: Emphasis,
  custom?: CounterConfig,
) => {
  const { emphasis: emphasisStyles, ...restStyles } = merge(
    defaultConfig,
    custom,
  );

  const { appearance: appearanceStyles } = emphasisStyles[emphasis];

  return {
    ...(appearanceStyles?.[appearance] ?? {}),
    ...restStyles,
  };
};
