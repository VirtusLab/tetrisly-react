import { type FC, useMemo } from 'react';

import type { AvatarProps } from './Avatar.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types/MarginProps';

export const Avatar: FC<AvatarProps & MarginProps> = ({
  appearance = 'blue',
  emphasis = 'low',
  shape = 'rounded',
  size = 'medium',
  custom,
  initials,
  img,
  ...restProps
}) => {
  const styles = useMemo(
    () =>
      stylesBuilder({
        custom,
        variant: { appearance, emphasis, shape, size },
      }),
    [custom, appearance, emphasis, shape, size],
  );

  return (
    <tet.div
      {...styles.container}
      data-testid="avatar"
      data-size={size}
      // if we have a single letter, we don't want to add letter spacing to better center the letter
      letterSpacing={initials?.length === 1 ? 'normal' : undefined}
      {...restProps}
    >
      {img ? (
        <tet.img {...styles.image} data-testid="avatar-image" {...img} />
      ) : (
        initials
      )}
    </tet.div>
  );
};
