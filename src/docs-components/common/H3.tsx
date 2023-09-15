import { FC } from 'react';

import { HProps } from './HProps';

import { tet } from '@/tetrisly';

export const H3: FC<HProps> = ({ inverted, ...props }) => (
  <tet.div
    display="flex"
    borderBottomWidth="1px"
    borderBottomColor={inverted ? 'border-neutral-strong' : 'border-default'}
    px="000"
    py="component-padding-2xLarge"
  >
    <tet.h3
      text="body-large"
      color={inverted ? 'content-secondary-inverted' : 'content-secondary'}
      {...props}
    />
  </tet.div>
);
