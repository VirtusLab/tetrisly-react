import { action } from '@storybook/addon-actions';
import { startCase } from 'lodash';

import { SectionHeader } from './common/SectionHeader';

import { InlineBanner } from '@/components/InlineBanner';
import { tet } from '@/tetrisly';

const intents = [
  'none',
  'informative',
  'success',
  'warning',
  'negative',
] as const;

export const InlineBannerDocs = () => (
  <>
    {intents.map((intent) => (
      <tet.section key={intent} px="1000" py="500">
        <SectionHeader variant="H1" as="h2">
          Intent: {startCase(intent)}
          <tet.div display="grid" gridTemplateColumns="1fr 1fr" gap="1000">
            <tet.div>
              <SectionHeader variant="H2" as="h3" py="500">
                Close Button: No
              </SectionHeader>
              <InlineBanner
                mt="500"
                title="Title"
                description="Description"
                intent={intent}
                action={[
                  { label: 'Primary action', onClick: action('onClick') },
                  { label: 'Secondary action', onClick: action('onClick') },
                ]}
              />
            </tet.div>
            <tet.div>
              <SectionHeader variant="H2" as="h3" py="500">
                Close Button: Yes
              </SectionHeader>
              <InlineBanner
                mt="500"
                title="Title"
                description="Description"
                intent={intent}
                action={[
                  { label: 'Primary action', onClick: action('onClick') },
                  { label: 'Secondary action', onClick: action('onClick') },
                ]}
                onCloseClick={action('onCloseClick')}
              />
            </tet.div>
          </tet.div>
        </SectionHeader>
      </tet.section>
    ))}
  </>
);
