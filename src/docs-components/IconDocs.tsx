import { icons, IconName } from '@virtuslab/tetrisly-icons';
import { FC } from 'react';

import { SectionHeader } from './common/SectionHeader';

import { Icon } from '@/components/Icon';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

const iconsNames = Object.keys(icons) as IconName[];

const icons20 = iconsNames.filter((iconName) => iconName.startsWith('20-'));
const icons16 = iconsNames.filter((iconName) => iconName.startsWith('16-'));

const IconsBoard: FC<{ heading: string; items: IconName[] } & MarginProps> = ({
  heading,
  items,
  ...rest
}) => (
  <tet.div {...rest}>
    <SectionHeader variant="H1" as="h3" mb="$dimension-300">
      {heading}
    </SectionHeader>
    <tet.div
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      ringInset
      ring="$border-width-small"
      ringColor="$color-border-default"
      borderRadius="$border-radius-medium"
      overflow="hidden"
    >
      {items.map((iconName) => (
        <tet.div
          display="flex"
          alignItems="center"
          py="$dimension-200"
          px="$dimension-300"
          borderBottom
          borderRight
          borderColor="$color-border-default"
          key={iconName}
        >
          <tet.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="$size-medium"
            h="$size-medium"
            borderRadius="$border-radius-medium"
            backgroundColor="$color-background-neutral-subtle"
          >
            <Icon color="$color-content-primary" name={iconName} />
          </tet.div>
          <tet.b
            text="$typo-body-strong-medium"
            color="$color-content-primary"
            ml="$dimension-300"
          >
            {iconName}
          </tet.b>
        </tet.div>
      ))}
    </tet.div>
  </tet.div>
);

export const IconDocs = () => (
  <tet.section>
    <tet.div px="$dimension-1000">
      <SectionHeader variant="Hero" as="h2">
        Icons lists
      </SectionHeader>
      <IconsBoard heading="20x20" items={icons20} />
      <IconsBoard heading="16x16" items={icons16} mt="$dimension-1000" />
    </tet.div>
  </tet.section>
);
