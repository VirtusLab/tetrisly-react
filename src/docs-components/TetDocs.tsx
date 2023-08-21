import { TetrislyProvider } from '@/tetrisly';
import { Primary, Controls } from '@storybook/blocks';

import { Unstyled, useOf } from '@storybook/blocks';
import { FC, PropsWithChildren } from 'react';
import { Hero } from './common/Hero';

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
          <Hero
            component={title.split('/').pop() ?? ''}
            description={description}
            docs={docs}
          />
          {children}
        </TetrislyProvider>
      </Unstyled>
      <Primary />
      <Controls />
    </>
  );
};
