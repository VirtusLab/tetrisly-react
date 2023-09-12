import { TextInputConfig } from '../TextInput.style';
import { BaseProps } from '../../../types/BaseProps';
type TextInputStylesBuilder = {
    container: BaseProps;
    input: BaseProps;
    icon: BaseProps;
    text: BaseProps;
    clearButton: BaseProps;
    beforeComponent: BaseProps;
    afterComponent: BaseProps;
};
export declare const stylesBuilder: (custom?: TextInputConfig, beforeComponentType?: 'Icon' | 'Avatar' | 'Prefix' | 'Dropdown', afterComponentType?: 'Icon' | 'Sufix' | 'Button' | 'IconButton' | 'Dropdown') => TextInputStylesBuilder;
export {};
