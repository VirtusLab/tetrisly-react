import { FC } from 'react';

import { HProps } from './HProps';

import { tet } from '@/tetrisly';

export const H2: FC<HProps> = ({ borderBottom, inverted, ...props }) => {
  const borderProps = borderBottom && {
    borderBottomWidth: '1px',
    borderBottomColor: `border-${borderBottom}`,
  };
  return (
    <tet.div px="1000">
      <tet.h2
        text="header-3xLarge"
        color={inverted ? 'content-primary-inverted' : 'content-primary'}
        py="500"
        {...props}
        {...borderProps}
      />
    </tet.div>
  );
};
