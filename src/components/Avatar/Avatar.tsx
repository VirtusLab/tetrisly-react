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
  const { styles, nestedImage } = stylesBuilder({
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
    nestedList: ['nestedImage'],
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

function hasInitials(obj: object): obj is { initials: string } {
  return 'initials' in obj;
}
