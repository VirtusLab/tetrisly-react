import { Primary, Controls, Stories, useOf, Unstyled } from '@storybook/blocks';
import { FC, PropsWithChildren } from 'react';
import { z } from 'zod';

import { Hero } from './common/Hero';

import { TetrislyProvider, tet } from '@/tetrisly';

const validateDocs = (docs: unknown) => {
  const schema = z.object({
    description: z.object({
      component: z.string(),
    }),
  });
  const result = schema.safeParse(docs);
  if (result.success) {
    return result.data.description.component;
  }
  return null;
};

export const TetDocs: FC<PropsWithChildren<{ docs: string | null }>> = ({
  children,
  docs,
}) => {
  const {
    preparedMeta: {
      title,
      parameters: { docs: sbDocs },
    },
  } = useOf('meta', ['meta']);
  const description = validateDocs(sbDocs);

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
