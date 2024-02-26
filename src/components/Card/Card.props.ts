import type { FC, ReactNode } from 'react';

import type { CardConfig } from './Card.styles';
import type { CardContentProps } from './CardContent/CardContent.props';
import type { CardFooterProps } from './CardFooter';
import type { CardHeaderProps } from './CardHeader/CardHeader.props';

import { MarginProps } from '@/types';

export type CardProps = {
  custom?: CardConfig;
  children: ReactNode;
} & MarginProps;

export type CardComponent = FC<CardProps> & {
  Header: FC<CardHeaderProps>;
  Content: FC<CardContentProps>;
  Footer: FC<CardFooterProps>;
};
