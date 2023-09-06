import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { InlineBanner } from './InlineBanner';

const meta = {
  title: 'Components/InlineBanner',
  component: InlineBanner,
  tags: ['autodocs'],
  args: {
    title: 'Title',
    description: 'Description',
    action: [
      {
        label: 'Primary action',
        onClick: action('onClick'),
      },
      {
        label: 'Secondary action',
        onClick: action('onClick'),
      },
    ],
    onCloseClick: () => {},
  },
} satisfies Meta<typeof InlineBanner>;

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
