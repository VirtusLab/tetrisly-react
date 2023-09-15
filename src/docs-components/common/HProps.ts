import { MarginProps } from '@xstyled/styled-components';
import { PropsWithChildren } from 'react';

export interface HProps extends PropsWithChildren<MarginProps> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  borderBottom?: 'neutral-subtle' | 'neutral-strong';
  inverted?: boolean;
}
