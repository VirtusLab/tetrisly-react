import { capitalize } from 'lodash';

import { Cols } from './common/Cols';
import { SectionHeader } from './common/SectionHeader';

import { InlineMessage } from '@/components/InlineMessage';
import { tet } from '@/tetrisly';

const intents = ['informative', 'success', 'warning', 'negative'] as const;

export const InlineMessageDocs = () => (
  <>
    {intents.map((intent) => (
      <tet.section key={intent} px="$dimension-1000" py="$dimension-500">
        <SectionHeader variant="H1" as="h2" py="$dimension-500">
          Intent: {capitalize(intent)}
        </SectionHeader>
        <Cols>
          <tet.div>
            <SectionHeader variant="H2" as="h3" py="$dimension-500">
              Description: Yes
            </SectionHeader>
            <InlineMessage
              intent={intent}
              title="Title"
              description="Description"
              mt="$dimension-500"
            />
          </tet.div>
          <tet.div>
            <SectionHeader variant="H2" as="h3" py="$dimension-500">
              Description: No
            </SectionHeader>
            <InlineMessage intent={intent} title="Title" mt="$dimension-500" />
          </tet.div>
        </Cols>
      </tet.section>
    ))}
  </>
);
