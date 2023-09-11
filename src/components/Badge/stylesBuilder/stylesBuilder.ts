import { BadgeProps } from '../Badge.props';
import { defaultConfig } from '../Badge.styles';
import { BadgeAppearance } from '../BadgeAppearance.type';
import { BadgeEmphasis } from '../BadgeEmphasis.type';
import { BadgeIntent } from '../BadgeIntent.type';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom/mergeConfigWithCutom';
import { BaseProps } from '@/types/BaseProps';

type BadgeStylesBuilder = {
  container: BaseProps;
  iconContainer: BaseProps;
  label: BaseProps;
};

export const stylesBuilder = (
  custom: BadgeProps['custom'],
  intent: BadgeIntent,
  emphasis: BadgeEmphasis,
  hasLabel?: boolean,
  appearance?: BadgeAppearance,
): BadgeStylesBuilder => {
  const {
    innerElements,
    hasLabel: hasLabelStyles,
    intent: containerIntent,
    appearance: containerAppearance,
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  const containerStyles = appearance
    ? containerAppearance[appearance].emphasis[emphasis]
    : containerIntent[intent].emphasis[emphasis];

  return {
    container: {
      ...container,
      ...containerStyles,
      ...(hasLabel ? hasLabelStyles : {}),
    },
    iconContainer: innerElements.iconContainer,
    label: innerElements.label,
  };
};
