import { TooltipConfig } from './Tooltip.styles';
export type ArrowheadPositionType = 'start' | 'middle' | 'end';
export type TooltipPositionType = 'top' | 'bottom' | 'left' | 'right';
export type TooltipProps = {
    arrowheadPosition?: ArrowheadPositionType;
    tooltipPosition?: TooltipPositionType;
    text: string;
    custom?: TooltipConfig;
};
