import { AvatarProps } from '../Avatar.props';
import { defaultConfig } from '../Avatar.styles';

import { mergeConfigWithCustom } from '@/services';

export const stylesBuilder = ({
  custom,
  variant,
}: {
  custom: AvatarProps['custom'];
  variant: Required<
    Pick<AvatarProps, 'appearance' | 'emphasis' | 'shape' | 'size'>
  >;
}) => {
  const {
    appearance: appearanceStyles,
    shape: shapeStyles,
    size: sizeStyles,
    ...base
  } = mergeConfigWithCustom({ defaultConfig, custom });
  const { appearance, emphasis, shape, size } = variant;

  return {
    ...base,
    ...appearanceStyles[appearance].emphasis[emphasis],
    ...shapeStyles[shape],
    ...sizeStyles[size],
  };
};
