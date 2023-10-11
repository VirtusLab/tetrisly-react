import { capitalize } from 'lodash';

import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { Badge } from '@/components/Badge';
import { tet } from '@/tetrisly';
import { appearances } from '@/types/Appearance';
import { basicIntents } from '@/types/BasicIntent';

export const emphases = ['high', 'medium', 'low'] as const;

export const BadgeDocs = () => (
  <>
    {emphases.map((emphasis) => (
      <tet.section
        key={emphasis}
        display="flex"
        padding="40px 0px"
        flexDirection="column"
      >
        <SectionHeader px="$dimension-1000" variant="H1" my="auto" as="h2">
          {capitalize(emphasis)} Emphasis
        </SectionHeader>
        <tet.div
          px="$dimension-1000"
          borderBottomWidth="1px"
          borderBottomColor="$color-border-neutral-subtle"
        >
          <SectionHeader variant="H2" as="h3" py="$dimension-500">
            Intent
          </SectionHeader>
          <States
            states={basicIntents}
            gap="$dimension-500"
            flexBasis="$dimension-100"
          />
          <tet.div py="$dimension-500" display="flex" gap="$dimension-500">
            {basicIntents.map((intent) => (
              <tet.div
                key={intent}
                display="flex"
                flexDirection="column"
                gap="$dimension-400"
                flexBasis="100"
                flexShrink="0"
                flexGrow="1"
              >
                <Badge intent={intent} label="Badge Text" />
                <Badge intent={intent} icon="16-bolt" />
              </tet.div>
            ))}
          </tet.div>
        </tet.div>
        <tet.div px="$dimension-1000">
          <SectionHeader variant="H2" as="h3" py="$dimension-500">
            Appearance
          </SectionHeader>

          <tet.div overflowX="scroll">
            <States
              states={appearances}
              gap="$dimension-500"
              itemWidth="96px"
            />
            <tet.div py="$dimension-500" display="flex" gap="39px">
              {appearances.map((appearance) => (
                <tet.div
                  key={appearance}
                  display="flex"
                  flexDirection="column"
                  gap="$dimension-400"
                  flexShrink="0"
                >
                  <Badge appearance={appearance} label="Badge Text" />
                  <Badge appearance={appearance} icon="16-bolt" />
                </tet.div>
              ))}
            </tet.div>
          </tet.div>
        </tet.div>
      </tet.section>
    ))}
  </>
);
