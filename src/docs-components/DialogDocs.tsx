import { capitalize } from 'lodash';

import { SectionHeader } from './common/SectionHeader';

import { Dialog } from '@/components/Dialog';
import { customStyleForDocs } from '@/components/Dialog/Dialog.styles';
import { tet } from '@/tetrisly';

const sizes = ['small', 'medium', 'large'] as const;

export const DialogDocs = () => (
  <>
    {sizes.map((size, i) => (
      <tet.section
        key={size[i]}
        display="flex"
        padding="40px 0px"
        flexDirection="column"
      >
        <SectionHeader px="$dimension-1600" variant="H1" my="auto">
          {capitalize(size)}
        </SectionHeader>
        <tet.div
          px="$dimension-1600"
          borderBottomWidth="1px"
          borderBottomColor="$color-border-neutral-subtle"
        >
          <tet.div
            py="$dimension-500"
            display="flex"
            flexWrap="nowrap"
            flexDirection="row"
            gap="$dimension-500"
            overflowX="scroll"
          >
            <tet.div padding="10px">
              <Dialog
                size={size}
                title="Title"
                content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
                actions={[{ label: 'Action' }, { label: 'Primary action' }]}
                custom={customStyleForDocs}
              />
            </tet.div>
          </tet.div>
        </tet.div>
      </tet.section>
    ))}
  </>
);
