import type { ReactNode } from 'react';
import type { CardConfig } from './Card.styles';
import type { CardFooterProps } from './CardFooter/CardFooter.props';
import type { CardHeaderProps } from './CardHeader/CardHeader.props';
import { MarginProps } from '../../types';
export type CardProps = {
    custom?: CardConfig;
    children: ReactNode;
    header?: Omit<CardHeaderProps, 'styles'>;
    footer?: Omit<CardFooterProps, 'styles'>;
} & MarginProps;
