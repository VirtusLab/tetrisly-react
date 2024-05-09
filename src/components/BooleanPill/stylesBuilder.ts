import { BooleanPillConfig, defaultConfig } from './BooleanPill.styles';
import { BooleanPillState } from './BooleanPillState.type';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type BooleanPillStyleBuilder = {
  container: BaseProps;
};

export const stylesBuilder = (
  state: BooleanPillState,
  isInverted: boolean,
  custom?: BooleanPillConfig,
): BooleanPillStyleBuilder => {
  const { state: containerState, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });
  const containerStyles = isInverted
    ? containerState[state].inverted
    : containerState[state].primary;

  return {
    container: {
      ...container,
      ...containerStyles,
    },
  };
};
