import type { TooltipPositionType, TooltipProps } from './Tooltip.props';
import { defaultConfig } from './Tooltip.styles';
import { getTextAlign } from './utils';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type TooltipStyleBuilder = {
  container: BaseProps;
  arrow: BaseProps;
  content: BaseProps;
};

export const stylesBuilder = (
  arrowPosition: BaseProps,
  tooltipPosition: TooltipPositionType,
  custom?: TooltipProps['custom'],
): TooltipStyleBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });
  const textAlign = getTextAlign(tooltipPosition);

  const { arrow, content } = innerElements;
  const arrowStyles: BaseProps = { ...arrow, ...arrowPosition };
  const contentStyles: BaseProps = { ...content, textAlign };

  return {
    container,
    arrow: arrowStyles,
    content: contentStyles,
  };
};
