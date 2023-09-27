import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Global Primitives / Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    label: 'Label',
  },
  parameters: {
    docs: {
      page: () => <TetDocs docs={null} />,
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Optional: Story = {
  args: {
    optional: '(optional)',
  },
};

export const Tooltip: Story = {
  args: {
    tooltip: true,
  },
};

export const Action: Story = {
  args: {
    action: {
      label: 'Action',
    },
  },
};

export const All: Story = {
  args: {
    optional: '(optional)',
    tooltip: true,
    action: {
      label: 'Action',
    },
  },
};
