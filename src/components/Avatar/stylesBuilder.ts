import type { AvatarProps } from './Avatar.props';
import { defaultConfig } from './Avatar.styles';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type AvatarStylesBuilder = {
  container: BaseProps;
  image: BaseProps;
};

export const stylesBuilder = ({
  custom,
  variant,
}: {
  custom: AvatarProps['custom'];
  variant: Required<
    Pick<AvatarProps, 'appearance' | 'emphasis' | 'shape' | 'size'>
  >;
}): AvatarStylesBuilder => {
  const {
    appearance: appearanceStyles,
    shape: shapeStyles,
    size: sizeStyles,
    innerElements: { image },
    ...restContainerStyles
  } = mergeConfigWithCustom({ defaultConfig, custom });
  const { appearance, emphasis, shape, size } = variant;

  return {
    container: {
      ...appearanceStyles[appearance].emphasis[emphasis],
      ...shapeStyles[shape],
      ...sizeStyles[size],
      ...restContainerStyles,
    },
    image,
  };
};
