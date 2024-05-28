import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { NewItemButton } from '@/components/NewItemButton';
import { tet } from '@/tetrisly';

const states = ['normal', 'alert', 'disabled'] as const;

export const NewItemButtonDocs = () => (
  <tet.section py="$dimension-500">
    <SectionHeader
      px="$dimension-1000"
      py="$dimension-500"
      variant="H1"
      as="h2"
    >
      State
    </SectionHeader>
    <tet.div px="$dimension-1000" pb="$dimension-500">
      <States
        states={['normal', 'alert', 'disabled']}
        flexBasis="130px"
        gap="$dimension-300"
      />
      <tet.div
        display="flex"
        flexDirection="row"
        gap="$dimension-300"
        pt="$dimension-300"
        flexBasis="130px"
        flexShrink="0"
        flexGrow="1"
      >
        {states.map((state) => (
          <tet.div flexBasis="130px" flexGrow="1" flexShrink="0">
            <NewItemButton state={state} text="Text" />
          </tet.div>
        ))}
      </tet.div>
    </tet.div>
  </tet.section>
);
