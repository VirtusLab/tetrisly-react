import type { Meta, StoryObj } from '@storybook/react';

import { StatusDot } from './StatusDot';

const meta = {
  title: 'Components/Status Dot',
  component: StatusDot,
  tags: ['autodocs'],
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: 'red',
  },
};

export const Stroked: Story = {
  args: {
    appearance: 'green',
    stroked: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
