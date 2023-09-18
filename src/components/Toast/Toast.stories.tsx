import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { Toast } from './Toast';

import { TetDocs } from '@/docs-components/TetDocs';
import { ToastDocs } from '@/docs-components/ToastDocs';

const meta = {
  title: 'Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    text: 'Toast text',
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
  parameters: {
    docs: {
      description: {
        component:
          'A temporary, non-intrusive notification displayed to provide users with feedback, alerts, or updates. Toasts are typically placed at the edge of the screen and disappear automatically after a set duration or when the user interacts with them.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/toast">
          <ToastDocs />
        </TetDocs>
      ),
    },
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
