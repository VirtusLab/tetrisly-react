import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    label: 'Label',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Optional: Story = {
  args: {
    optional: true,
  },
};

export const Action: Story = {
  args: {
    action: { label: 'Action', appearance: 'primary' },
  },
};

export const Tooltip: Story = {
  args: {
    tooltip: true,
  },
};

export const All: Story = {
  args: {
    optional: true,
    action: { label: 'Action', appearance: 'primary' },
    tooltip: true,
  },
};
