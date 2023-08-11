import { FC, ImgHTMLAttributes } from 'react';

import { AvatarProps } from './Avatar.props';
import { AvatarConfig, config } from './Avatar.styles';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import { WithCustom } from '@/utility-types/WithCustom';

export const Avatar: FC<WithCustom<AvatarProps, AvatarConfig>> = ({
  appearance = 'blue',
  emphasis = 'low',
  shape = 'rounded',
  size = 'medium',
  custom = {},
  ...rest
}) => {
  const { nestedImage, ...styles } = stylesBuilder({
    config,
    custom,
    variant: { appearance, emphasis, shape, size },
  });
  return (
    <tet.div {...styles}>
      {hasImage(rest) ? (
        <tet.img {...nestedImage} {...rest.img} />
      ) : (
        rest.initials
      )}
    </tet.div>
  );
};

function hasImage(
  obj: object,
): obj is { img: Omit<ImgHTMLAttributes<HTMLImageElement>, 'color'> } {
  return 'img' in obj;
}
