import { Primary, Controls, Stories, useOf, Unstyled } from '@storybook/blocks';
import { FC, PropsWithChildren } from 'react';

import { Hero } from './common/Hero';

import { TetrislyProvider, tet } from '@/tetrisly';

export const TetDocs: FC<PropsWithChildren<{ docs: string }>> = ({
  children,
  docs,
}) => {
  const {
    preparedMeta: {
      title,
      parameters: {
        docs: {
          description: { component: description },
        },
      },
    },
  } = useOf('meta', ['meta']);
  return (
    <>
      <Unstyled>
        <TetrislyProvider>
          <tet.div minWidth="888px">
            <Hero
              component={title.split('/').pop() ?? ''}
              description={description}
              docs={docs}
            />
            {children}
          </tet.div>
        </TetrislyProvider>
      </Unstyled>
      <Primary />
      <Controls />
      <Stories />
    </>
  );
};
