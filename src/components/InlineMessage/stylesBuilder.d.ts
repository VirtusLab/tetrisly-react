import { InlineMessageProps } from './InlineMessage.props';
import { InlineMessageIntent } from './InlineMessageIntent.type';
import { BaseProps } from '../../types/BaseProps';
type InlineMessageStyleBuilder = {
    container: BaseProps;
    title: BaseProps;
    iconContainer: BaseProps;
    description: BaseProps;
};
export declare const stylesBuilder: (intent: InlineMessageIntent, custom: InlineMessageProps['custom']) => InlineMessageStyleBuilder;
export {};
