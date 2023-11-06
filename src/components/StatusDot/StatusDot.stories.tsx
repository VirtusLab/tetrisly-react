import type { Meta, StoryObj } from '@storybook/react';

import { StatusDot } from './StatusDot';

import { StatusDotDocs } from '@/docs-components/StatusDotDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Global Primitives / StatusDot',
  component: StatusDot,
  tags: ['autodocs'],
  args: {
    hasStroke: false,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      page: () => (
        <TetDocs docs={null}>
          <StatusDotDocs />
        </TetDocs>
      ),
    },
  },
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
    hasStroke: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
