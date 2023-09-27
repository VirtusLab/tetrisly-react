import { GapProps } from '@xstyled/styled-components';
import { FC } from 'react';
import { MarginProps } from '../../types/MarginProps';
import { PaddingProps } from '../../types/PaddingProps';
type ColsProps = {
    columns?: number;
    children: React.ReactNode;
    gap?: GapProps['gap'];
} & PaddingProps & MarginProps;
export declare const Cols: FC<ColsProps>;
export {};
