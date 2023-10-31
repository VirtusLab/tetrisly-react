import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { AlertBanner } from './AlertBanner';

import { AlertBannerDocs } from '@/docs-components/AlertBannerDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'AlertBanner',
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
  argTypes: {
    intent: {
      options: ['none', 'success', 'warning', 'negative'],
      defaultValue: 'none',
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Prominent element used to display important messages or notifications to users. Alert Banners can convey various levels of urgency, such as success, warning, or error. They are designed to capture the user's attention and provide a clear and concise message.",
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/alertbanner">
          <AlertBannerDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof AlertBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Positive: Story = {
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
