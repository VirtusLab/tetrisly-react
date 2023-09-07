import { FC, ImgHTMLAttributes, useMemo } from 'react';

import { AvatarProps } from './Avatar.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const Avatar: FC<AvatarProps> = ({
  appearance = 'blue',
  emphasis = 'low',
  shape = 'rounded',
  size = 'medium',
  custom = {},
  initials,
  ...rest
}) => {
  const { nestedImage, ...styles } = useMemo(
    () =>
      stylesBuilder({
        custom,
        variant: { appearance, emphasis, shape, size },
      }),
    [custom, appearance, emphasis, shape, size],
  );

  const [img, marginProps] = extractImage(rest);

  return (
    <tet.div {...{ ...styles, ...marginProps }}>
      {img !== null ? <tet.img {...nestedImage} {...img} /> : initials}
    </tet.div>
  );
};

function extractImage<T extends object>(obj: T) {
  if ('img' in obj) {
    const { img, ...marginProps } = obj as {
      img: Omit<ImgHTMLAttributes<HTMLImageElement>, 'color'>;
    } & MarginProps;
    return [img, marginProps] as const;
  }
  return [null, obj] as const;
}
