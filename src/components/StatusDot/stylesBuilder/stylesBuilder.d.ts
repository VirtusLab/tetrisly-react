import type { StatusDotProps } from '../StatusDot.props';
import { StatusDotAppearance } from '../types';
import { BaseProps } from '../../../types/BaseProps';
type StylesBuilderParams = {
    appearance: StatusDotAppearance;
    stroked: StatusDotProps['stroked'];
    custom: StatusDotProps['custom'];
};
type StatusDotStylesBuilder = {
    container: BaseProps;
};
export declare const stylesBuilder: ({ appearance, stroked, custom, }: StylesBuilderParams) => StatusDotStylesBuilder;
export {};
