import { FC, isValidElement, PropsWithChildren } from 'react';

import { checkIfChildrenIsCustomComponent } from './utils';

import { tet } from '@/tetrisly';

type AdditionalElementWrapperProps = PropsWithChildren;

export const AdditionalElementWrapper: FC<AdditionalElementWrapperProps> = ({
  children,
}) => {
  const isCustomComponent =
    isValidElement(children) && checkIfChildrenIsCustomComponent(children);

  return isCustomComponent ? (
    <tet.div
      data-testid="dialog-additional-child"
      backgroundColor="$color-background-neutral-subtle"
      w="100%"
      h="100%"
    >
      {children}
    </tet.div>
  ) : (
    <>
      <tet.div
        data-testid="dialog-additional-child"
        display="flex"
        alignItems="center"
        w="100%"
        h="100%"
      >
        {children}
      </tet.div>
      <tet.div maxW="100%" />
    </>
  );
};
