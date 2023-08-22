import { FC, ImgHTMLAttributes } from 'react';

import { AvatarProps } from './Avatar.props';
import { config } from './Avatar.styles';
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
  const { nestedImage, ...styles } = stylesBuilder({
    config,
    custom,
    variant: { appearance, emphasis, shape, size },
  });

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
