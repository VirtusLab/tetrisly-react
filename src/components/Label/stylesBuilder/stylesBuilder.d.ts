import type { LabelProps } from '../Label.props';
import type { BaseProps } from '../../../types/BaseProps';
type LabelStylesBuilder = {
    label: BaseProps;
    optional: BaseProps;
    tooltip: BaseProps;
    action: BaseProps;
};
export declare const stylesBuilder: (custom: LabelProps['custom']) => LabelStylesBuilder;
export {};
