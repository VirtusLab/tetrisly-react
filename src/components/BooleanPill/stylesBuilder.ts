import { BooleanPillConfig, defaultConfig } from './BooleanPill.styles';
import { BooleanPillState } from './BooleanPillState.type';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type BooleanPillStyleBuilder = {
  container: BaseProps;
};

type BooleanPillStyleBuilderInput = {
  state: BooleanPillState;
  isInverted: boolean;
  isSelected: boolean;
  hasAvatar: boolean;
  custom?: BooleanPillConfig;
};

export const stylesBuilder = ({
  state,
  isInverted,
  isSelected,
  hasAvatar,
  custom,
}: BooleanPillStyleBuilderInput): BooleanPillStyleBuilder => {
  const { state: containerState, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });
  const containerStyles = isInverted
    ? containerState[state].inverted
    : containerState[state].primary;

  const withAvatarStyles = hasAvatar ? container.hasAvatar : {};
  const withSelectedStyles = isSelected ? container.isSelected : {};

  return {
    container: {
      ...container,
      ...containerStyles,
      ...withAvatarStyles,
      ...withSelectedStyles,
    },
  };
};
