import { ReactNode } from 'react';

import { PopoverConfig } from './Popover.styles';
import type { PopoverAlign, PopoverOrigin } from './types';

import { DeepPartial } from '@/utility-types/DeepPartial';

export type PopoverProps = {
  content: string | ReactNode;
  align?: PopoverAlign;
  origin?: PopoverOrigin;
  isOpen?: boolean;
  custom?: DeepPartial<PopoverConfig>;
};
