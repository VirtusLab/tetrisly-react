import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { InlineBanner } from './InlineBanner';

import { InlineBannerDocs } from '@/docs-components/InlineBannerDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'InlineBanner',
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
    onCloseClick: action('onCloseClick'),
  },
  parameters: {
    docs: {
      description: {
        component:
          'A narrow visual element that displays relevant messages or prompts within the context of the main content. Often used to show alerts, promotions, or feature highlights.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/inlinebanner">
          <InlineBannerDocs />
        </TetDocs>
      ),
    },
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
