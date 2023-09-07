import { FC, useMemo } from 'react';

import type { DividerProps } from './Divider.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const Divider: FC<DividerProps & MarginProps> = ({
  orientation = 'horizontal',
  width,
  height,
  custom = {},
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder({ orientation, width, height, custom }),
    [orientation, width, height, custom],
  );

  return <tet.hr {...styles.container} {...restProps} data-testid="divider" />;
};
