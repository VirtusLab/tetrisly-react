import type { GapProps } from '@xstyled/styled-components';
import type { FC } from 'react';
import type { MarginProps } from '../../types/MarginProps';
import type { PaddingProps } from '../../types/PaddingProps';
type ColsProps = {
    columns?: number;
    children: React.ReactNode;
    gap?: GapProps['gap'];
} & PaddingProps & MarginProps;
export declare const Cols: FC<ColsProps>;
export {};
