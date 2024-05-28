import { BadgeConfig, defaultConfig } from './Badge.styles';
import { BadgeAppearance } from './BadgeAppearance.type';
import { BadgeEmphasis } from './BadgeEmphasis.type';
import { BadgeIntent } from './BadgeIntent.type';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type BadgeStylesBuilder = {
  container: BaseProps;
  iconContainer: BaseProps;
  label: BaseProps;
};

export const stylesBuilder = (
  intent: BadgeIntent,
  emphasis: BadgeEmphasis,
  custom?: BadgeConfig,
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
