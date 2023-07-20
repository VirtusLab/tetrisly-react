import { FC } from 'react';

import { AvatarProps } from './Avatar.props';
import { config } from './Avatar.styles';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import { WithCustom } from '@/utility-types/WithCustom';

export const Avatar: FC<WithCustom<AvatarProps, typeof config>> = ({
  appearance = 'blue',
  emphasis = 'low',
  shape = 'rounded',
  size = 'medium',
  custom,
}) => {
  const styles = stylesBuilder(
    {
      shape,
      size,
      isBoolean: true,
      appearance: { [appearance]: { emphasis } },
    },
    config,
    custom
  );
  return <tet.div {...styles} />;
};
