import { FC } from 'react';

import { HProps } from './HProps';

import { tet } from '@/tetrisly';

export const H1: FC<HProps> = ({ inverted, ...props }) => (
  <tet.h1
    text="header-4xLarge"
    color={inverted ? 'content-primary-inverted' : 'content-primary'}
    py="500"
    px="1000"
    {...props}
  />
);
