import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { SectionHeader } from './common/SectionHeader';

import { Button } from '@/components/Button';
import { ButtonGroup } from '@/components/ButtonGroup';
import { tet } from '@/tetrisly';

const items = [4, 3, 2] as const;
const sizes = ['medium', 'small'] as const;

export const ButtonGroupDocs: FC = () => (
  <>
    {items.map((item) => (
      <tet.section
        key={item}
        display="flex"
        pt="$dimension-500"
        pb="$dimension-500"
        flexDirection="column"
      >
        <SectionHeader variant="H1" as="h1" px="$dimension-1000">
          {item} items
        </SectionHeader>
        {sizes.map((size) => (
          <tet.div key={size} display="flex" flexDirection="column">
            <SectionHeader
              variant="H2"
              as="h3"
              px="$dimension-1000"
              py="$dimension-300"
              borderBottom="$color-neutral-strong"
            >
              Size: {size === 'medium' ? 'Medium (Default)' : 'Small'}
            </SectionHeader>
            <tet.div
              px="$dimension-1000"
              pb="$dimension-500"
              mt="$dimension-400"
              mb="$dimension-400"
              key={size}
            >
              <ButtonGroup>
                {[...Array(item)].map(() => {
                  const id = uuidv4();
                  return (
                    <Button key={`button-item-${id}`} label="Button label" />
                  );
                })}
              </ButtonGroup>
            </tet.div>
          </tet.div>
        ))}
      </tet.section>
    ))}
  </>
);
