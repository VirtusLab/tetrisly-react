import { capitalize } from 'lodash';

import { SectionHeader } from './common/SectionHeader';
import { State } from './common/States';

import { Status } from '@/components/Status';
import { tet } from '@/tetrisly';

const appearances = ['grey', 'blue', 'green', 'red', 'orange'] as const;
const emphases = ['high', 'medium', 'low'] as const;

export const StatusDocs = () => (
  <>
    {emphases.map((emphasis) => (
      <tet.section
        key={emphasis}
        display="flex"
        padding="40px 0px"
        flexDirection="column"
      >
        <SectionHeader px="$dimension-1000" variant="H1" my="auto">
          {capitalize(emphasis)} Emphasis
        </SectionHeader>
        <tet.div
          px="$dimension-1000"
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
            {appearances.map((appearance, i) => (
              <tet.div
                key={appearance}
                display="flex"
                flexDirection="column"
                gap="$dimension-400"
                flexBasis="100"
                flexShrink="0"
                flexGrow="1"
              >
                <State key={appearances[i]} state={appearances[i]} />
                <tet.div py="$space-component-padding-4xLarge">
                  <Status
                    appearance={appearance}
                    emphasis={emphasis}
                    label="Status"
                  />
                </tet.div>
              </tet.div>
            ))}
          </tet.div>
        </tet.div>
      </tet.section>
    ))}
  </>
);
