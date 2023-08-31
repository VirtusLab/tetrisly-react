import { SystemProp } from '@xstyled/styled-components';
import { ReactNode } from 'react';

import { PopoverConfig } from './Popover.styles';
import type { PopoverAlign, PopoverOrigin } from './types';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type PopoverProps = {
  content: string | ReactNode;
  offset?: string | Theme['space'];
  align?: PopoverAlign;
  origin?: PopoverOrigin;
  isOpen?: boolean;
  /** width of a popover content */
  width?: SystemProp<string | number | object | (string & object), Theme>;
  custom?: DeepPartial<PopoverConfig>;
};
