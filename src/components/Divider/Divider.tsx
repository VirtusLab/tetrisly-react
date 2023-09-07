import { DividerProps } from './Divider.props';
import { defaultConfig } from './Divider.styles';

import { mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const Divider = ({
  orientation = 'horizontal',
  width,
  height,
  custom = {},
  ...restProps
}: DividerProps & MarginProps) => {
  const { orientation: orientationStyles, ...restStyles } =
    mergeConfigWithCustom({ defaultConfig, custom });

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
