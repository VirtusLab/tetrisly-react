import { NewItemButtonConfig } from './NewItemButton.styles';
import { NewItemButtonState } from './NewItemButtonState.type';
import { BaseProps } from '../../types/BaseProps';
type NewItemButtonStyleBuilder = {
    container: BaseProps;
    text: BaseProps;
};
export declare const stylesBuilder: (state: NewItemButtonState, custom?: NewItemButtonConfig) => NewItemButtonStyleBuilder;
export {};
