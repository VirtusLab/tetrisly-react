import { PropsWithChildren } from 'react';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

export const H2 = (props: PropsWithChildren<MarginProps>) => (
  <tet.h2
    text="header-3xLarge"
    color="content-primary"
    px="1000"
    py="500"
    {...props}
  />
);
