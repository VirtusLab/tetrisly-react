import { SystemProps } from '@xstyled/styled-components';

import { config } from './InlineMessage.styles';
import { InlineMessageIntent } from './InlineMessageIntent.type';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type InlineMessageProps = {
  intent?: InlineMessageIntent;
  title: string;
  description?: string;
  custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};
