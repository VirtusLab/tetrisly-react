import { useMemo } from 'react';

import type { AvatarProps } from './Avatar.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types/MarginProps';

export const Avatar: React.FC<AvatarProps & MarginProps> = ({
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
    <tet.div {...styles.container} data-testid="avatar" {...restProps}>
      {img ? (
        <tet.img {...styles.image} data-testid="avatar-image" {...img} />
      ) : (
        initials
      )}
    </tet.div>
  );
};
