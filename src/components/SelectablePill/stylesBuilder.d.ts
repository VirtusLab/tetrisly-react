import { SelectablePillProps } from './SelectablePill.props';
import { SelectablePillConfig } from './SelectablePill.styles';
import { SelectablePillState } from './SelectablePillState.type';
import { BaseProps } from '../../types/BaseProps';
type SelectablePillStyleBuilder = {
    container: BaseProps;
    icon: BaseProps;
    prefix: BaseProps;
    actionIcon: BaseProps;
    textContainer: BaseProps;
    contentContainer: BaseProps;
};
type SelectablePillStyleBuilderInput = {
    state: SelectablePillState;
    isInverted: boolean;
    isSelected: boolean;
    beforeComponent?: SelectablePillProps['beforeComponent'];
    prefix?: string;
    custom?: SelectablePillConfig;
};
export declare const stylesBuilder: ({ state, isInverted, isSelected, beforeComponent, prefix, custom, }: SelectablePillStyleBuilderInput) => SelectablePillStyleBuilder;
export {};
