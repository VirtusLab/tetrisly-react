import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

import { tet } from '@/tetrisly';
import { appearances } from '@/types/Appearance';
import { basicIntents } from '@/types/BasicIntent';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: 'informative',
    emphasis: 'high',
    label: 'Label',
  },
};

export const Icon: Story = {
  args: {
    appearance: 'blue',
    icon: '16-bolt',
  },
};

export const LabelIcons: Story = {
  args: {
    intent: 'informative',
    label: 'Label',
    beforeIcon: '16-bolt',
    afterIcon: '16-bolt',
  },
};

export const All = () => (
  <tet.div spaceY="component-gap-small">
    <tet.p>High emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {appearances.map((appearance) => (
        <Badge appearance={appearance} icon="16-bolt" key={appearance} />
      ))}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map((intent) => (
        <Badge intent={intent} icon="16-bolt" key={intent} />
      ))}
    </tet.div>
    <tet.p>Medium emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {appearances.map((appearance) => (
        <Badge
          appearance={appearance}
          emphasis="medium"
          icon="16-bolt"
          key={appearance}
        />
      ))}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map((intent) => (
        <Badge intent={intent} emphasis="medium" icon="16-bolt" key={intent} />
      ))}
    </tet.div>
    <tet.p>Low emphasis</tet.p>
    <tet.div display="flex" spaceX="component-gap-small">
      {appearances.map((appearance) => (
        <Badge
          appearance={appearance}
          emphasis="low"
          icon="16-bolt"
          key={appearance}
        />
      ))}
    </tet.div>
    <tet.div display="flex" spaceX="component-gap-small">
      {basicIntents.map((intent) => (
        <Badge intent={intent} emphasis="low" icon="16-bolt" key={intent} />
      ))}
    </tet.div>
  </tet.div>
);
