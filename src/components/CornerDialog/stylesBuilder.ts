import { CornerDialogConfig, defaultConfig } from './CornerDialog.styles';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom/mergeConfigWithCutom';
import { BaseProps } from '@/types/BaseProps';

type CornerDialogStylesBuilder = {
  container: BaseProps;
  intentIndicator: BaseProps;
  intentWarning: BaseProps;
  intentNegative: BaseProps;
  body: BaseProps;
  header: BaseProps;
  headerTitle: BaseProps;
  closeButton: BaseProps<'appearance'>;
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
    intentWarning: innerElements.intentWarning,
    intentNegative: innerElements.intentNegative,
    body: innerElements.body,
    header: innerElements.header,
    headerTitle: innerElements.headerTitle,
    closeButton: innerElements.closeButton,
    content: innerElements.content,
    footer: innerElements.footer,
  };
};
