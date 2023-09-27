import { action } from '@storybook/addon-actions';
import { capitalize } from 'lodash';

import { SectionHeader } from './common/SectionHeader';

import { AlertBanner } from '@/components/AlertBanner';
import { tet } from '@/tetrisly';

const intents = ['none', 'positive', 'warning', 'negative'] as const;

export const AlertBannerDocs = () => (
  <>
    {intents.map((intent) => (
      <tet.section key={intent}>
        <SectionHeader px={{ md: '1000', _: '500' }} py="500" variant="H1">
          Intent: {capitalize(intent)}
        </SectionHeader>
        <tet.div px={{ md: '1000', _: '500' }}>
          <SectionHeader py="500" variant="H2">
            Action: No
          </SectionHeader>
          <AlertBanner text="Alert text" intent={intent} />
        </tet.div>
        <tet.div px={{ md: '1000', _: '500' }}>
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
