import { InlineMessageConfig } from './InlineMessage.styles';
import { InlineMessageIntent } from './InlineMessageIntent.type';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type InlineMessageProps = {
  title: string;
  intent?: InlineMessageIntent;
  description?: string;
  custom?: InlineMessageConfig;
};
