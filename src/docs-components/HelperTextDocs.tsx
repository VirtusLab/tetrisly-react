import { SectionHeader } from './common/SectionHeader';

import { HelperText } from '@/components/HelperText';
import { tet } from '@/tetrisly';

const intents = ['none', 'alert', 'success'] as const;

export const HelperTextDocs = () => (
  <>
    {intents.map((intent) => (
      <tet.section key={intent} px="$dimension-1000">
        <SectionHeader py="$dimension-500" variant="H2">
          Intent: {intent}
        </SectionHeader>
        <tet.div py="$space-component-padding-4xLarge">
          <HelperText intent={intent} text="Helper text" beforeIcon />
        </tet.div>
      </tet.section>
    ))}
  </>
);
