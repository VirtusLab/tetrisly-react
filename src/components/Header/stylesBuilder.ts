import { HeaderType } from './Header.props';
import { HeaderConfig, defaultConfig } from './Header.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom/mergeConfigWithCustom';
import { BaseProps } from '@/types/BaseProps';

type HeaderStylesBuilder = {
  container: BaseProps;
  bottomBar: BaseProps;
  table: BaseProps;
  titleContainer: BaseProps;
  titleAndDescriptionContainer: BaseProps;
  description: BaseProps;
  actionContainer: BaseProps;
  counter: BaseProps;
  search: BaseProps;
};

export const stylesBuilder = (
  type: HeaderType,
  custom?: HeaderConfig,
): HeaderStylesBuilder => {
  const {
    table,
    titleContainer,
    titleAndDescriptionContainer,
    description,
    counter,
    actionContainer,
    bottomBar,
    search,
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  const { type: bottomBarStyles, ...restBottomStyles } = bottomBar;
  const { type: tableStyles, ...restTableStyles } = table;
  const { type: searchStyles, ...restSearchStyles } = search;

  return {
    container: {
      ...container,
    },
    counter,
    table: { ...tableStyles[type], ...restTableStyles },
    search: { ...searchStyles[type], ...restSearchStyles },
    titleAndDescriptionContainer,
    titleContainer,
    description,
    actionContainer,
    bottomBar: { ...bottomBarStyles[type], ...restBottomStyles },
  };
};
