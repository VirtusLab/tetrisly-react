import { merge } from 'lodash';

import { DividerProps } from './Divider.props';
import { config as defaultConfig } from './Divider.styles';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const Divider = ({
  orientation = 'horizontal',
  width,
  height,
  custom = {},
  ...restProps
}: DividerProps & MarginProps) => {
  const { orientation: orientationStyles, ...restStyles } = merge(
    defaultConfig,
    custom,
  );
  return (
    <tet.hr
      {...restStyles}
      {...restProps}
      w={width ?? orientationStyles[orientation].w}
      h={height ?? orientationStyles[orientation].h}
      data-testid="divider"
    />
  );
};
