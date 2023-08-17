import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

import { tet } from '@/tetrisly';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <tet.div h="100px">
      <Divider {...args} />
    </tet.div>
  ),
};
