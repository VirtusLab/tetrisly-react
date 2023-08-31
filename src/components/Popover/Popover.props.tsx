import { SystemProp } from '@xstyled/styled-components';
import { ReactNode } from 'react';

import { PopoverConfig } from './Popover.styles';
import type { PopoverAlign, PopoverOrigin } from './types';

import { Theme } from '@/theme';
import { DeepPartial } from '@/utility-types/DeepPartial';

export type PopoverProps = {
  content: string | ReactNode;
  offset?: SystemProp<keyof Theme['space'], Theme>;
  align?: PopoverAlign;
  origin?: PopoverOrigin;
  isOpen?: boolean;
  /** Width of a content container */
  width?: SystemProp<string | number | object | (string & object), Theme>;
  custom?: DeepPartial<PopoverConfig>;
};
