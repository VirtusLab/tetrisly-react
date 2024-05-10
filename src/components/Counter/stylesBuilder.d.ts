import type { CounterProps } from './Counter.props';
import type { CounterAppearance } from './types';
import type { BaseProps } from '../../types/BaseProps';
import type { Emphasis } from '../../types/Emphasis';
type CounterStylesBuilderParams = {
    appearance: CounterAppearance;
    emphasis: Emphasis;
    custom?: CounterProps['custom'];
};
type CounterStylesBuilder = {
    container: BaseProps;
};
export declare const stylesBuilder: ({ appearance, emphasis, custom, }: CounterStylesBuilderParams) => CounterStylesBuilder;
export {};
