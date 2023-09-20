import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { StatusDot } from '@/components/StatusDot';
import { tet } from '@/tetrisly';

const appearances = ['red', 'green', 'orange'] as const;

export const StatusDotDocs = () => (
  <>
    <tet.section py="component-padding-4xLarge">
      <SectionHeader variant="H1" as="h2">
        Stroked: No
      </SectionHeader>
      <tet.div px="1000" py="500">
        <States states={appearances} flexBasis="300px" />
        <tet.div display="flex">
          {appearances.map((appearance) => (
            <tet.div
              key={appearance}
              display="flex"
              flexBasis="300px"
              flexShrink="0"
              flexGrow="1"
            >
              <StatusDot appearance={appearance} />
            </tet.div>
          ))}
        </tet.div>
      </tet.div>
    </tet.section>
    <tet.section bg="background-neutral-subtle" py="component-padding-4xLarge">
      <SectionHeader variant="H1" as="h2" py="500">
        Stroked: Yes
      </SectionHeader>
      <tet.div px="1000" py="500">
        <States states={appearances} flexBasis="300px" />
        <tet.div display="flex">
          {appearances.map((appearance) => (
            <tet.div
              key={appearance}
              display="flex"
              flexBasis="300px"
              flexShrink="0"
              flexGrow="1"
            >
              <StatusDot appearance={appearance} stroked />
            </tet.div>
          ))}
        </tet.div>
      </tet.div>
    </tet.section>
  </>
);
