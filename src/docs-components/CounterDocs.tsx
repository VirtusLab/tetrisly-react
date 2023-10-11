import { capitalize } from 'lodash';

import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { Counter } from '@/components/Counter';
import { tet } from '@/tetrisly';

const emphases = ['high', 'low'] as const;
const appearances = [
  'default',
  'red',
  'grey',
  'blue',
  'green',
  'orange',
] as const;

export const CounterDocs = () => (
  <>
    {emphases.map((emphasis) => (
      <tet.section key={emphasis} py="$dimension-500" px="$dimension-1000">
        <SectionHeader variant="H1" as="h2">
          {capitalize(emphasis)} Emphasis
          <tet.div py="$dimension-500">
            <States
              states={appearances.map(capitalize)}
              flexBasis="96px"
              gap="40px"
            />
            <tet.div display="flex" gap="40px">
              {appearances.map((appearance) => (
                <tet.div
                  display="flex"
                  flexBasis="96px"
                  flexShrink="0"
                  flexGrow="1"
                >
                  <Counter
                    number={24}
                    emphasis={emphasis}
                    appearance={appearance}
                  />
                </tet.div>
              ))}
            </tet.div>
          </tet.div>
        </SectionHeader>
      </tet.section>
    ))}
  </>
);
