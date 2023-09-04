import { SystemProp } from '@xstyled/styled-components';
import { Property } from 'csstype';
import { ReactNode } from 'react';

import { PopoverConfig } from './Popover.styles';
import type { PopoverAlign, PopoverOrigin } from './types';

import { Theme } from '@/theme';

export type PopoverProps = {
  content: string | ReactNode;
  offset?: SystemProp<keyof Theme['space'], Theme>;
  align?: PopoverAlign;
  origin?: PopoverOrigin;
  isOpen?: boolean;
  /** Width of a content container */
  width?: SystemProp<Property.Width<number>, Theme>;
  custom?: PopoverConfig;
};
