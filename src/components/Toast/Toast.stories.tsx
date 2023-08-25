import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    text: 'Toast text',
    action: [
      {
        label: 'Action',
      },
      {
        label: 'Action',
      },
    ],
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Informative: Story = {
  args: {
    intent: 'informative',
  },
};

export const Success: Story = {
  args: {
    intent: 'success',
  },
};

export const Warning: Story = {
  args: {
    intent: 'warning',
  },
};

export const Negative: Story = {
  args: {
    intent: 'negative',
  },
};

export const NeutralHigh: Story = {
  args: {
    emphasis: 'high',
  },
};

export const InformativeHigh: Story = {
  args: {
    intent: 'informative',
    emphasis: 'high',
  },
};

export const SuccessHigh: Story = {
  args: {
    intent: 'success',
    emphasis: 'high',
  },
};

export const WarningHigh: Story = {
  args: {
    intent: 'warning',
    emphasis: 'high',
  },
};

export const NegativeHigh: Story = {
  args: {
    intent: 'negative',
    emphasis: 'high',
  },
};
