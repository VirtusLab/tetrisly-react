import { capitalize } from 'lodash';

import { H2 } from './common/H2';
import { H3 } from './common/H3';
import { States } from './common/States';

import { emphases } from '@/components/Badge/Badge.props';
import { Badge } from '@/index';
import { tet } from '@/tetrisly';
import { appearances } from '@/types/Appearance';
import { basicIntents } from '@/types/BasicIntent';

export const BadgeDocs = () => (
  <>
    {emphases.map((emphasis) => (
      <tet.section
        key={emphasis}
        display="flex"
        padding="40px 0px"
        flexDirection="column"
        borderBottomWidth="1px"
        borderBottomColor="#9747FF"
      >
        <H2 my="auto">{capitalize(emphasis)} Emphasis</H2>
        <tet.div
          px="1000"
          borderBottomWidth="1px"
          borderBottomColor="border-neutral-subtle"
        >
          <H3>Intent</H3>
          <States states={basicIntents} gap="500" itemWidth="96px" />
          <tet.div py="500" display="flex" gap="39px">
            {basicIntents.map((intent) => (
              <tet.div
                key={intent}
                display="flex"
                flexDirection="column"
                gap="400"
              >
                <Badge intent={intent} label="Badge Text" />
                <Badge intent={intent} icon="16-bolt" />
              </tet.div>
            ))}
          </tet.div>
        </tet.div>
        <tet.div px="1000">
          <H3>Appearance</H3>

          <tet.div overflowX="scroll">
            <States states={appearances} gap="500" itemWidth="96px" />
            <tet.div py="500" display="flex" gap="39px">
              {appearances.map((appearance) => (
                <tet.div
                  key={appearance}
                  display="flex"
                  flexDirection="column"
                  gap="400"
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
