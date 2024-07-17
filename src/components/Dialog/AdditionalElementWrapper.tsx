import { FC, PropsWithChildren } from 'react';

import { tet } from '@/tetrisly';

export const AdditionalElementWrapper: FC<PropsWithChildren> = ({
  children,
}) => (
  <>
    <tet.div
      data-testid="dialog-additional-child"
      display="flex"
      alignItems="center"
    >
      {children}
    </tet.div>
    <tet.div w="100%" />
  </>
);
