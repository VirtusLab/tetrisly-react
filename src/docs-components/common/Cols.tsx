import type { GapProps } from '@xstyled/styled-components';
import type { FC } from 'react';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types/MarginProps';
import type { PaddingProps } from '@/types/PaddingProps';

type ColsProps = {
  columns?: number;
  children: React.ReactNode;
  gap?: GapProps['gap'];
} & PaddingProps &
  MarginProps;

export const Cols: FC<ColsProps> = ({
  columns = 2,
  children,
  gap,
  ...restProps
}) => (
  <tet.div
    display="grid"
    gridTemplateColumns={{ md: `repeat(${columns}, 1fr)`, _: '1fr' }}
    gap={gap}
    {...restProps}
  >
    {children}
  </tet.div>
);
