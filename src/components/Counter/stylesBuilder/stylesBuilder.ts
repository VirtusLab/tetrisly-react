import { merge } from 'lodash';

import { CounterConfig, defaultConfig } from '../Counter.styles';
import { CounterAppearance } from '../types';

import { BaseProps } from '@/types/BaseProps';
import { Emphasis } from '@/types/Emphasis';

type CounterStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = (
  appearance: CounterAppearance,
  emphasis: Emphasis,
  custom?: CounterConfig,
): CounterStylesBuilder => {
  const { appearance: appearanceStyles, ...restStyles } = merge(
    defaultConfig,
    custom,
  );

  const { emphasis: emphasisStyles } = appearanceStyles[appearance];

  return {
    container: {
      ...(emphasisStyles?.[emphasis] ?? {}),
      ...restStyles,
    },
  };
};
