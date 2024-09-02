import { HTMLAttributes } from 'react';
import { ButtonGroupConfig } from './ButtonGroup.styles';
export type ButtonGroupSize = 'medium' | 'small';
export type ButtonGroupProps = {
    size?: ButtonGroupSize;
    custom?: ButtonGroupConfig;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'color'>;
