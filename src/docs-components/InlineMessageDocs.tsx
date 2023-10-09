import { capitalize } from 'lodash';

import { Cols } from './common/Cols';
import { SectionHeader } from './common/SectionHeader';

import { InlineMessage } from '@/components/InlineMessage';
import { tet } from '@/tetrisly';

const intents = ['informative', 'success', 'warning', 'negative'] as const;

export const InlineMessageDocs = () => (
  <>
    {intents.map((intent) => (
      <tet.section key={intent} px="1000" py="500">
        <SectionHeader variant="H1" as="h2" py="500">
          Intent: {capitalize(intent)}
        </SectionHeader>
        <Cols>
          <tet.div>
            <SectionHeader variant="H2" as="h3" py="500">
              Description: Yes
            </SectionHeader>
            <InlineMessage
              intent={intent}
              title="Title"
              description="Description"
            />
          </tet.div>
          <tet.div>
            <SectionHeader variant="H2" as="h3" py="500">
              Description: No
            </SectionHeader>
            <InlineMessage intent={intent} title="Title" />
          </tet.div>
        </Cols>
      </tet.section>
    ))}
  </>
);
