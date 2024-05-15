import {
  ArrowheadPositionType,
  TooltipPositionType,
  TooltipProps,
} from './Tooltip.props';
import { defaultConfig } from './Tooltip.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type TooltipStyleBuilder = {
  container: BaseProps;
  arrow: BaseProps;
  content: BaseProps;
};

export const stylesBuilder = (
  arrowheadPosition?: ArrowheadPositionType,
  tooltipPosition?: TooltipPositionType,
  custom?: TooltipProps['custom'],
): TooltipStyleBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });

  const { arrow, content } = innerElements;

  // const { ...arrowBasicStyles} = arrow
  // const arrowStyles = arrowheadPosition && tooltipPosition && arrow.tooltipPosition[tooltipPosition].arrowheadPosition[arrowheadPosition];

  return {
    container,
    arrow,
    content,
  };
};
