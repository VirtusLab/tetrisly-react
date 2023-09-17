import { FC } from 'react';

import { SectionHeader } from './common/SectionHeader';

import { tet } from '@/tetrisly';

export const CheckboxDocs: FC = () => (
  <tet.div>
    <SectionHeader variant="H1" as="h2">
      Unchecked
    </SectionHeader>
    <tet.section>
      <tet.div
        display="flex"
        flexDirection="column"
        gap="component-gap-small"
      />
    </tet.section>
    <SectionHeader variant="H1">Checked</SectionHeader>
    <tet.section>
      <tet.div
        display="flex"
        flexDirection="column"
        gap="component-gap-small"
      />
    </tet.section>
    <SectionHeader variant="H1">Indeterminate</SectionHeader>
    <tet.section>
      <tet.div
        display="flex"
        flexDirection="column"
        gap="component-gap-small"
      />
    </tet.section>
  </tet.div>
);
