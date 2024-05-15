import { BooleanPillConfig } from './BooleanPill.styles';
import { BooleanPillState } from './BooleanPillState.type';
import { BaseProps } from '../../types/BaseProps';
type BooleanPillStyleBuilder = {
    container: BaseProps;
};
type BooleanPillStyleBuilderInput = {
    state: BooleanPillState;
    isInverted: boolean;
    isSelected: boolean;
    hasAvatar: boolean;
    custom?: BooleanPillConfig;
};
export declare const stylesBuilder: ({ state, isInverted, isSelected, hasAvatar, custom, }: BooleanPillStyleBuilderInput) => BooleanPillStyleBuilder;
export {};
