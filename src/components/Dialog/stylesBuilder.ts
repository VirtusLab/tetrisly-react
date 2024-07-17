import { defaultConfig, DialogConfig } from './Dialog.styles';
import { DialogSize, DialogFooter, DialogIntent } from './types';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types';

type StylesBuilderParams = {
  additionalChild: BaseProps;
  footer: BaseProps;
  closeIcon: BaseProps;
  container: BaseProps;
  content: BaseProps;
  emptyDiv: BaseProps;
  intentIcon: BaseProps;
  header: BaseProps;
  title: BaseProps;
  titleContainer: BaseProps;
};

export const stylesBuilder = (
  size: DialogSize,
  footer: DialogFooter,
  intent: DialogIntent,
  custom?: DialogConfig,
): StylesBuilderParams => {
  const {
    additionalChild,
    closeIcon,
    emptyDiv,
    size: containerSize,
    footer: footerContainer,
    intentIcon,
    content,
    header,
    title,
    titleContainer,
    ...container
  } = mergeConfigWithCustom({ defaultConfig, custom });

  const { type, ...restFooterContainer } = footerContainer;
  const containerStyles = { ...containerSize[size], ...container };
  const footerStyles = { ...type[footer], ...restFooterContainer };
  const intentIconStyles = { ...intentIcon[intent] };

  return {
    additionalChild,
    closeIcon,
    container: containerStyles,
    content,
    emptyDiv,
    footer: footerStyles,
    intentIcon: intentIconStyles,
    header,
    title,
    titleContainer,
  };
};
