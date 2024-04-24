import { CornerDialogConfig, defaultConfig } from '../CornerDialog.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom/mergeConfigWithCutom';
import { BaseProps } from '@/types/BaseProps';

type CornerDialogStylesBuilder = {
  container: BaseProps;
  intentIndicator: BaseProps;
  body: BaseProps;
  header: BaseProps;
  headerTitle: BaseProps;
  content: BaseProps;
  footer: BaseProps;
};

export const stylesBuilder = (
  custom?: CornerDialogConfig,
): CornerDialogStylesBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  return {
    container,
    intentIndicator: innerElements.intentIndicator,
    body: innerElements.body,
    header: innerElements.header,
    headerTitle: innerElements.headerTitle,
    content: innerElements.content,
    footer: innerElements.footer,
  };
};
