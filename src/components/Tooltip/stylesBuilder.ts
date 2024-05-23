import type {
  ArrowheadPositionType,
  TooltipPositionType,
  TooltipProps,
} from './Tooltip.props';
import { defaultConfig } from './Tooltip.styles';
import { alignItemsBasedOnArrowheadPosition, getTextAlign } from './utils';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type TooltipStyleBuilder = {
  container: BaseProps;
  arrow: BaseProps;
  content: BaseProps;
  wrapper: BaseProps;
};

export const stylesBuilder = (
  tooltipPosition: TooltipPositionType,
  arrowheadPosition: ArrowheadPositionType,
  custom?: TooltipProps['custom'],
): TooltipStyleBuilder => {
  const { innerElements, ...container } = mergeConfigWithCustom({
    defaultConfig,
    custom,
  });
  const textAlign = getTextAlign(tooltipPosition);
  const flexDirection =
    tooltipPosition === 'left' || tooltipPosition === 'right'
      ? 'row'
      : 'column';
  const alignItems =
    tooltipPosition === 'left' || tooltipPosition === 'right'
      ? 'center'
      : alignItemsBasedOnArrowheadPosition(arrowheadPosition);

  const { arrow, content, wrapper } = innerElements;
  const arrowStyles = arrow[tooltipPosition];
  const contentStyles: BaseProps = { ...content, textAlign };
  const containerStyles: BaseProps = {
    ...container,
    flexDirection,
    alignItems,
  };
  const wrapperStyles: BaseProps = {
    ...wrapper,
    flexDirection,
    alignItems,
  };

  return {
    container: containerStyles,
    wrapper: wrapperStyles,
    arrow: arrowStyles,
    content: contentStyles,
  };
};
