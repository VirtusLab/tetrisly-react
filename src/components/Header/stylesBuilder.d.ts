import { HeaderConfig, HeaderType } from './Header.styles';
import { BaseProps } from '../../types/BaseProps';
type HeaderStylesBuilder = {
    container: BaseProps;
    bottomBar: BaseProps;
    table: BaseProps;
    titleContainer: BaseProps;
    titleAndDescriptionContainer: BaseProps;
    description: BaseProps;
    actionContainer: BaseProps;
    counter: BaseProps;
    search: BaseProps;
};
export declare const stylesBuilder: (type: HeaderType, custom?: HeaderConfig) => HeaderStylesBuilder;
export {};
