import type { PopoverProps } from './Popover.props';
import type { PopoverAlign, PopoverOrigin } from './types';
import type { BaseProps } from '../../types/BaseProps';
type StylesBuilderParams = {
    origin: PopoverOrigin;
    align: PopoverAlign;
    custom: PopoverProps['custom'];
};
type PopoverStylesBuilder = {
    container: BaseProps;
    content: BaseProps;
};
export declare const stylesBuilder: ({ origin, align, custom, }: StylesBuilderParams) => PopoverStylesBuilder;
export {};
