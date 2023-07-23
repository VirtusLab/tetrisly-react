import { FC, ImgHTMLAttributes } from 'react';

import { AvatarProps } from './Avatar.props';
import { config } from './Avatar.styles';
import { stylesBuilder } from '../../services/stylesBuilder/stylesBuilder';

import { tet } from '@/tetrisly';
import { WithCustom } from '@/utility-types/WithCustom';

export const Avatar: FC<WithCustom<AvatarProps, typeof config>> = ({
  appearance = 'blue',
  emphasis = 'low',
  shape = 'rounded',
  size = 'medium',
  custom,
  ...rest
}) => {
  const { styles } = stylesBuilder({
    variant: {
      shape,
      size,
      appearance: { [appearance]: { emphasis } } as Record<
        typeof appearance,
        { emphasis: typeof emphasis }
      >,
    },
    config,
    custom,
  });
  return (
    <tet.div {...styles}>
      {hasImage(rest) && (
        <tet.img
          w="100%"
          h="100%"
          src={rest.img.src}
          alt={rest.name}
          {...rest.img}
        />
      )}
    </tet.div>
  );
};

function hasImage(
  obj: object,
): obj is { img: Omit<ImgHTMLAttributes<HTMLImageElement>, 'color'> } {
  return 'img' in obj;
}
