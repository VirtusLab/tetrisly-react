import { FC } from 'react';

import { H2 } from './common/H2';
import { H3 } from './common/H3';

import { variants } from '@/components/Button/types/ButtonType.type';
import { tet } from '@/tetrisly';

export const ButtonDocs: FC = () => (
  <>
    {variants.map((variant) => (
      <tet.section key={variant} display="flex" pt="500" flexDirection="column">
        <H2>{variant}</H2>
        <H3>Primary</H3>
      </tet.section>
    ))}
  </>
);
