import type { TagProps } from '../Tag.props';
import { defaultConfig } from '../Tag.styles';

import { mergeConfigWithCustom } from '@/services';
import type { BaseProps } from '@/types/BaseProps';

type TagStylesBuilder = {
  container: BaseProps;
  label: BaseProps;
  avatar: BaseProps<'appearance'>;
  closeButton: BaseProps<'appearance'>;
};
export const stylesBuilder = (
  custom: TagProps['custom'],
  hasOnClick?: boolean,
): TagStylesBuilder => {
  const {
    hasOnClick: hasOnClickStyles,
    innerElements: {
      label,
      closeButton,
      beforeComponent: { avatar },
    },
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  return {
    container: {
      ...container,
      ...(hasOnClick && hasOnClickStyles),
    },
    label,
    avatar,
    closeButton,
  };
};
