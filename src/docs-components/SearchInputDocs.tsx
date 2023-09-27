import { ComponentProps } from 'react';

import { SectionHeader } from './common/SectionHeader';
import { States } from './common/States';

import { SearchInput } from '@/components/SearchInput';
import { tet } from '@/tetrisly';

const states = ['normal', 'disabled'] as const;
const afterComponents = ['No', 'Dropdown', 'IconButton'] as const;

const afterComponentsMap = {
  No: undefined,
  Dropdown: {
    type: 'Dropdown',
    props: {
      label: 'All',
      onClick: () => {},
    },
  },
  IconButton: {
    type: 'IconButton',
    props: {
      icon: '20-placeholder',
      onClick: () => {},
    },
  },
} satisfies Record<
  (typeof afterComponents)[number],
  ComponentProps<typeof SearchInput>['afterComponent']
>;

export const SearchInputDocs = () => (
  <>
    {afterComponents.map((afterComponent) => (
      <tet.section px="1000" key={afterComponent}>
        <SectionHeader variant="H2" as="h2" py="500">
          AfterComponent: {afterComponent}
        </SectionHeader>
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
              <SearchInput
                afterComponent={afterComponentsMap[afterComponent]}
                state={state === 'normal' ? undefined : 'disabled'}
              />
            </tet.div>
          ))}
        </tet.div>
      </tet.section>
    ))}
  </>
);
