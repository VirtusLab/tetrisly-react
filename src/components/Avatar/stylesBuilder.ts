import { merge } from 'lodash';

import { AvatarProps } from './Avatar.props';
import { AvatarConfig } from './Avatar.styles';

import { Custom } from '@/utility-types/WithCustom';

export function stylesBuilder({
  config: originalConfig,
  custom,
  variant,
}: {
  config: AvatarConfig;
  custom: Custom<AvatarConfig>;
  variant: Required<
    Pick<AvatarProps, 'appearance' | 'emphasis' | 'shape' | 'size'>
  >;
}) {
  const {
    appearance: appearanceStyles,
    shape: shapeStyles,
    size: sizeStyles,
    ...base
  } = merge(originalConfig, custom);
  const { appearance, emphasis, shape, size } = variant;

  return {
    ...base,
    ...appearanceStyles[appearance].emphasis[emphasis],
    ...shapeStyles[shape],
    ...sizeStyles[size],
  };
}
