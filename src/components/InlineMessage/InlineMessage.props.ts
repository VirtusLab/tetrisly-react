import { InlineMessageConfig, config } from './InlineMessage.styles';
import { InlineMessageIntent } from './InlineMessageIntent.type';

import { DeepPartial } from '@/utility-types/DeepPartial';
import { MarginProps } from '@/types/MarginProps';

export type InlineMessageProps = {
  intent?: InlineMessageIntent;
  title: string;
  description?: string;
  custom?: DeepPartial<InlineMessageConfig>;
} & MarginProps;
