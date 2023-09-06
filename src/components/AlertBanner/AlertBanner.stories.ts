import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { AlertBanner } from './AlertBanner';

const meta = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  tags: ['autodocs'],
  args: {
    text: 'Alert text',
    action: [
      {
        label: 'Action',
        onClick: action('onClick'),
      },
      {
        label: 'Action',
        onClick: action('onClick'),
      },
    ],
  },
} satisfies Meta<typeof AlertBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Positive: Story = {
  args: {
    intent: 'positive',
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
