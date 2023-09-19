import { action } from '@storybook/addon-actions';

import { SectionHeader } from './common/SectionHeader';

import { AlertBanner } from '@/components/AlertBanner';
import { tet } from '@/tetrisly';

const intents = ['none', 'positive', 'warning', 'negative'] as const;

export const AlertBannerDocs = () => (
  <>
    {intents.map((intent) => (
      <tet.section
        key={intent}
        borderBottomWidth="1px"
        borderBottomColor="#9747FF"
      >
        <SectionHeader py="500" variant="H1">
          Intent: {intent}
        </SectionHeader>
        <tet.div px="1000">
          <SectionHeader py="500" variant="H2">
            Action: No
          </SectionHeader>
          <AlertBanner text="Alert text" intent={intent} />
        </tet.div>
        <tet.div px="1000">
          <SectionHeader py="500" variant="H2">
            Action: Yes
          </SectionHeader>
          <AlertBanner
            text="Alert text"
            intent={intent}
            my="500"
            action={[
              {
                label: 'Click me',
                onClick: action('onClick'),
              },
              {
                label: 'Or click me',
                onClick: action('onClick'),
              },
            ]}
          />
        </tet.div>
      </tet.section>
    ))}
  </>
);
