import { PropsWithChildren } from 'react';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

export const H3 = (props: PropsWithChildren<MarginProps>) => (
  <tet.div
    display="flex"
    borderBottomWidth="1px"
    borderBottomColor="border-default"
    px="000"
    py="component-padding-2xLarge"
  >
    <tet.h3 text="body-large" color="content-secondary" {...props} />
  </tet.div>
);
