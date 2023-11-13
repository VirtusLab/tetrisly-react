import type { FC } from 'react';

import { Tag, type TagProps } from '@/components/Tag';
import { SectionHeader } from '@/docs-components/common/SectionHeader.tsx';
import { States } from '@/docs-components/common/States.tsx';
import { tet } from '@/tetrisly';

const headers = ['Remove button: No', 'Remove button: Yes'] as const;
const labels = ['Before component: None', 'Before component: Avatar'];
const states = [':normal', ':selected', ':disabled'];

const RenderTag = ({
  header,
  label,
  state,
}: {
  header: (typeof headers)[number];
  label: (typeof labels)[number];
  state: (typeof states)[number];
}) => (
  <tet.div flexBasis="120px" flexGrow="1" flexShrink="0">
    <Tag
      label="Tag"
      state={state === ':normal' ? undefined : (state as TagProps['state'])}
      onCloseClick={header === 'Remove button: Yes' ? () => null : undefined}
      onClick={() => null}
      beforeComponent={
        label === 'Before component: Avatar'
          ? {
              type: 'Avatar',
              props: { initials: 'A', appearance: 'blue', emphasis: 'high' },
            }
          : undefined
      }
    />
  </tet.div>
);

export const TagDocs: FC = () => (
  <tet.div>
    {headers.map((header) => (
      <tet.section key={header} py="$dimension-500">
        <SectionHeader variant="H1" as="h2" py="$dimension-500">
          {header}
        </SectionHeader>
        {labels.map((label) => (
          <tet.div px="$dimension-1000" pb="$dimension-500" key={label}>
            <SectionHeader
              variant="H2"
              as="h3"
              py="$dimension-500"
              labels={[label]}
            />
            <States states={states} flexBasis="120px" gap="40" />
            <tet.div display="flex" mt="40" gap="$dimension-500">
              {states.map((state) => (
                <RenderTag
                  key={state}
                  header={header}
                  label={label}
                  state={state.substring(1)}
                />
              ))}
            </tet.div>
          </tet.div>
        ))}
      </tet.section>
    ))}
  </tet.div>
);
