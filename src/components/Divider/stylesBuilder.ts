import type { DividerProps } from './Divider.props';
import { defaultConfig } from './Divider.styles';
import type { DividerOrientation } from './types';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type StylesBuilderParams = {
  orientation: DividerOrientation;
  width: DividerProps['width'];
  height: DividerProps['height'];
  custom: DividerProps['custom'];
};

type DividerStylesBuilder = {
  container: BaseProps;
};

export const stylesBuilder = ({
  orientation,
  width,
  height,
  custom,
}: StylesBuilderParams): DividerStylesBuilder => {
  const { orientation: orientationStyles, ...restStyles } =
    mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container: {
      w: width ?? orientationStyles[orientation].w,
      h: height ?? orientationStyles[orientation].h,
      ...restStyles,
    },
  };
};
