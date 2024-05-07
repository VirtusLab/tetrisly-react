import { capitalize } from 'lodash';

import { SectionHeader } from './common/SectionHeader';

import { CornerDialog } from '@/components/CornerDialog';
import { tet } from '@/tetrisly';

const intents = ['none', 'warning', 'negative'] as const;

export const CornerDialogDocs = () => (
  <tet.section
    display="flex"
    padding="$dimension-500 $dimension-0"
    flexDirection="column"
  >
    <SectionHeader px="$dimension-1000" variant="H1" my="auto" as="h2">
      Intent
    </SectionHeader>
    <tet.div
      py="$dimension-300"
      display="flex"
      flexWrap="wrap"
      gap="$dimension-300"
      flexDirection="column"
    >
      {intents.map((intent) => (
        <tet.div key={intent} px="$dimension-1000" py="$dimension-300">
          <SectionHeader variant="H2" as="h3" py="$dimension-500">
            {capitalize(intent)}
          </SectionHeader>

          <tet.div
            display="flex"
            flexDirection="column"
            gap="$dimension-300"
            pt="$dimension-300"
            flexBasis="100"
            flexShrink="0"
            flexGrow="1"
          >
            <CornerDialog
              intent={intent}
              title="Title"
              content="Description"
              actions={[
                { label: 'Action' },
                {
                  label: 'Primary Action',
                  appearance: 'primary',
                },
              ]}
              onCloseClick={() => {}}
            />
          </tet.div>
        </tet.div>
      ))}
    </tet.div>
  </tet.section>
);
