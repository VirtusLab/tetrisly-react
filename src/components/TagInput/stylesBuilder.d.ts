import { TagInputConfig } from './TagInput.styles';
import { BaseProps } from '../../types/BaseProps';
type StylesBuilderParams = {
    container: BaseProps;
    input: BaseProps;
    inputContainer: BaseProps;
};
export declare const stylesBuilder: (custom?: TagInputConfig, isAlertOrError?: boolean) => StylesBuilderParams;
export {};
