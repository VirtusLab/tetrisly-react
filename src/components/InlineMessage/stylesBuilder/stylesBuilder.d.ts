import { InlineMessageProps } from '../InlineMessage.props';
import { InlineMessageIntent } from '../InlineMessageIntent.type';
import { BaseProps } from '../../../types/BaseProps';
import { IconName } from '../../../utility-types/IconName';
type InlineMessageStyleBuilder = {
    titleStyles: BaseProps;
    iconStyles: {
        name: IconName<20>;
    };
    iconContainerStyles: BaseProps;
    descriptionStyles: BaseProps;
} & BaseProps;
export declare const stylesBuilder: (intent: InlineMessageIntent, custom: InlineMessageProps['custom']) => InlineMessageStyleBuilder;
export {};
