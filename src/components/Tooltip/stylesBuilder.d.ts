import type { ArrowheadPositionType, TooltipPositionType, TooltipProps } from './Tooltip.props';
import { BaseProps } from '../../types/BaseProps';
type TooltipStyleBuilder = {
    container: BaseProps;
    arrow: BaseProps;
    content: BaseProps;
    wrapper: BaseProps;
};
export declare const stylesBuilder: (tooltipPosition: TooltipPositionType, arrowheadPosition: ArrowheadPositionType, custom?: TooltipProps['custom']) => TooltipStyleBuilder;
export {};
