import { ReactNode } from 'react';
import { BaseProps } from '../../types';
interface SectionHeaderProps extends BaseProps {
    variant: 'H1' | 'H2' | 'H3' | 'Hero';
    inverted?: boolean;
    children?: ReactNode;
    labels?: string[];
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const SectionHeader: ({ inverted, variant, labels, children, ...props }: SectionHeaderProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
