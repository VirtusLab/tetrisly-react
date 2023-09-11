import type { PopoverProps } from '../Popover.props';
import { defaultConfig } from '../Popover.styles';
import type { PopoverAlign, PopoverOrigin } from '../types';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type StylesBuilderParams = {
  origin: PopoverOrigin;
  align: PopoverAlign;
  custom: PopoverProps['custom'];
};

type PopoverStylesBuilder = {
  container: BaseProps;
  content: BaseProps;
};

export const stylesBuilder = ({
  origin,
  align,
  custom,
}: StylesBuilderParams): PopoverStylesBuilder => {
  const {
    origin: originStyles,
    innerElements: { content: contentStyles },
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container,
    content: {
      ...originStyles[origin].align[align],
      ...contentStyles,
    },
  };
};
