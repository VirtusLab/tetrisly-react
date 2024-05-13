import { startCase } from 'lodash';
import { FC } from 'react';

import { SectionHeader } from './common/SectionHeader';

import { BooleanPill, BooleanPillProps } from '@/components/BooleanPill';
import { tet } from '@/tetrisly';

const states = ['default', 'disabled'] as const;
const appearances = [false, true] as const;
const selected = [false, true] as const;

const props = [
  { id: '0', text: 'Value', onChange: () => {} } as const,
  {
    id: '1',
    text: 'Value',
    onChange: () => {},
    avatar: { initials: 'M' },
  } as const,
  {
    id: '2',
    text: 'Value',
    onChange: () => {},
    avatar: { image: 'https://thispersondoesnotexist.com/' },
  } as const,
] as BooleanPillProps[];

export const BooleanPillDocs: FC = () => (
  <>
    {states.map((state) => (
      <tet.section
        key={state}
        display="flex"
        pt="$dimension-500"
        flexDirection="column"
      >
        <SectionHeader variant="Hero" as="h2" px="$dimension-1000">
          {startCase(state)}
        </SectionHeader>
        {appearances.map((appearance) => (
          <tet.div
            key={`${state}-${appearance}`}
            display="flex"
            flexDirection="column"
            bg={appearance ? '$color-background-neutral-subtle' : undefined}
          >
            <SectionHeader
              variant="H2"
              as="h3"
              px="$dimension-1000"
              py="$dimension-500"
              borderBottom="$color-neutral-strong"
            >
              {appearance ? 'Inverted' : 'Primary'}
            </SectionHeader>

            {selected.map((select) => (
              <tet.div
                px="$dimension-1000"
                pb="$dimension-500"
                key={`${states}-${appearance}-${select}`}
              >
                <SectionHeader variant="H3" as="h4" pt="$dimension-500">
                  Selected: {String(select)}
                </SectionHeader>

                <tet.div
                  display="flex"
                  flexBasis="180px"
                  flexGrow="1"
                  flexShrink="0"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  flexDirection="row"
                  gap="$dimension-300"
                  py="$dimension-500"
                >
                  {props.map(({ id, ...prop }) => (
                    <BooleanPill
                      state={state}
                      isInverted={appearance}
                      isSelected={select}
                      key={id}
                      {...prop}
                    />
                  ))}
                </tet.div>
              </tet.div>
            ))}
          </tet.div>
        ))}
      </tet.section>
    ))}
  </>
);
