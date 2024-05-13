import { SelectablePillProps } from './SelectablePill.props';
import { SelectablePillConfig, defaultConfig } from './SelectablePill.styles';
import { SelectablePillState } from './SelectablePillState.type';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type SelectablePillStyleBuilder = {
  container: BaseProps;
  icon: BaseProps;
  prefix: BaseProps;
  actionIcon: BaseProps;
  textContainer: BaseProps;
  contentContainer: BaseProps;
};

type SelectablePillStyleBuilderInput = {
  state: SelectablePillState;
  isInverted: boolean;
  isSelected: boolean;
  beforeComponent?: SelectablePillProps['beforeComponent'];
  prefix?: string;
  custom?: SelectablePillConfig;
};

export const stylesBuilder = ({
  state,
  isInverted,
  isSelected,
  beforeComponent,
  prefix,
  custom,
}: SelectablePillStyleBuilderInput): SelectablePillStyleBuilder => {
  const {
    state: containerState,
    innerElements: {
      icon,
      actionIcon,
      textContainer,
      contentContainer,
      prefix: prefixElement,
    },
    ...container
  } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });
  const containerStyles = isInverted
    ? containerState[state].inverted
    : containerState[state].primary;

  const hasPrefix = !!prefix;
  const hasBeforeComponent = !!beforeComponent;
  const hasAvatar = hasBeforeComponent && 'avatar' in beforeComponent;
  const hasIcon = hasBeforeComponent && 'icon' in beforeComponent;

  const withAvatarStyles = hasAvatar ? container.hasAvatar : {};
  const withPrefixStyles = hasPrefix ? container.hasPrefix : {};
  const withIconStyles = hasIcon ? container.hasIcon : {};
  const withSelectedStyles = isSelected ? container.isSelected : {};

  const contentContainerStyles = hasAvatar
    ? contentContainer.small
    : contentContainer.xSmall;

  return {
    container: {
      ...container,
      ...containerStyles,
      ...withAvatarStyles,
      ...withPrefixStyles,
      ...withIconStyles,
      ...withSelectedStyles,
    },
    icon,
    actionIcon,
    textContainer,
    prefix: prefixElement,
    contentContainer: contentContainerStyles,
  };
};
