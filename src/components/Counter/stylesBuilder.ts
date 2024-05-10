import type { CounterProps } from './Counter.props';
import { defaultConfig } from './Counter.styles';
import type { CounterAppearance } from './types';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';
import type { Emphasis } from '@/types/Emphasis';

type CounterStylesBuilderParams = {
  appearance: CounterAppearance;
  emphasis: Emphasis;
  custom?: CounterProps['custom'];
};

type CounterStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = ({
  appearance,
  emphasis,
  custom,
}: CounterStylesBuilderParams): CounterStylesBuilder => {
  const { appearance: appearanceStyles, ...restStyles } = mergeConfigWithCustom(
    { defaultConfig, custom },
  );

  const { emphasis: emphasisStyles } = appearanceStyles[appearance];

  return {
    container: {
      ...emphasisStyles[emphasis],
      ...restStyles,
    },
  };
};
