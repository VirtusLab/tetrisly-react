import { InlineMessageConfig } from './InlineMessage.styles';
import { InlineMessageIntent } from './InlineMessageIntent.type';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type InlineMessageProps = {
  intent?: InlineMessageIntent;
  title: string;
  description?: string;
  custom?: DeepPartial<InlineMessageConfig>;
};
