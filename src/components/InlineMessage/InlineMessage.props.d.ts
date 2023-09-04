import { InlineMessageConfig } from './InlineMessage.styles';
import { InlineMessageIntent } from './InlineMessageIntent.type';
export type InlineMessageProps = {
    title: string;
    intent?: InlineMessageIntent;
    description?: string;
    custom?: InlineMessageConfig;
};
