import type { Meta, StoryObj } from '@storybook/react';

import { BooleanPill } from './BooleanPill';

import { BooleanPillDocs } from '@/docs-components/BooleanPillDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'BooleanPill',
  component: BooleanPill,
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
          <BooleanPillDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof BooleanPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
  },
};

export const DefaultWithAvatar: Story = {
  args: {
    state: 'default',
    avatar: { image: 'https://thispersondoesnotexist.com/' },
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

export const DisabledAndSelected: Story = {
  args: {
    isSelected: true,
    state: 'disabled',
  },
};

export const SelectedWithAvatar: Story = {
  args: {
    isSelected: true,
    avatar: { appearance: 'magenta', initials: 'M' },
  },
};
