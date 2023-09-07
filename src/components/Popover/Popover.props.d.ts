import type { SystemProp } from '@xstyled/styled-components';
import type { Property } from 'csstype';
import type { ReactNode } from 'react';
import type { PopoverConfig } from './Popover.styles';
import type { PopoverAlign, PopoverOrigin } from './types';
import type { Theme } from '../../theme';
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
