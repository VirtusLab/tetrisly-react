import type { Meta, StoryObj } from '@storybook/react';

import { SelectablePill } from './SelectablePill';

import { SelectablePillDocs } from '@/docs-components/SelectablePillDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'SelectablePill',
  component: SelectablePill,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    state: 'default',
    text: 'Value',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A compact, rounded indicator used to represent tags, categories, or statuses. Pills often include text and/or icons and can be interactive, such as allowing users to remove a filter or tag.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/pill">
          <SelectablePillDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof SelectablePill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const Selected: Story = {
  args: {
    isSelected: true,
  },
};

export const Inverted: Story = {
  args: {
    isInverted: true,
  },
};

export const WithIcon: Story = {
  args: {
    beforeComponent: { type: 'icon', props: { name: '20-tree' } },
  },
};

export const DisabledWithIcon: Story = {
  args: {
    state: 'disabled',
    beforeComponent: { type: 'icon', props: { name: '20-tree' } },
  },
};

export const WithIconAndPrefix: Story = {
  args: {
    prefix: 'Prefix',
    beforeComponent: { type: 'icon', props: { name: '20-tree' } },
  },
};

export const SelectedWithIcon: Story = {
  args: {
    isSelected: true,
    beforeComponent: { type: 'icon', props: { name: '20-tree' } },
  },
};

export const InvertedWithPrefix: Story = {
  args: {
    isInverted: true,
    prefix: 'Prefix',
  },
};

export const WithAvatar: Story = {
  args: {
    beforeComponent: {
      type: 'avatar',
      props: { image: 'https://thispersondoesnotexist.com/' },
    },
  },
};

export const WithAvatarInitialsAndPrefix: Story = {
  args: {
    prefix: 'Prefix',
    beforeComponent: {
      type: 'avatar',
      props: { appearance: 'blue', initials: 'M' },
    },
  },
};

export const SelectedWithPrefix: Story = {
  args: {
    prefix: 'Prefix',
    isSelected: true,
  },
};
