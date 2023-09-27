import { States } from './common/States';

import { InlineSearchInput } from '@/components/InlineSearchInput';
import { tet } from '@/tetrisly';

const states = ['normal', 'disabled'] as const;

export const InlineSearchInputDocs = () => (
  <tet.section px="1000">
    <States states={states} gap="500" />
    <tet.div display="flex" gap="500">
      {states.map((state) => (
        <tet.div
          key={state}
          display="flex"
          flexBasis="96px"
          flexShrink="0"
          flexGrow="1"
        >
          <InlineSearchInput
            state={state === 'normal' ? undefined : 'disabled'}
          />
        </tet.div>
      ))}
    </tet.div>
  </tet.section>
);
