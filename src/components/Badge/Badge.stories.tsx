import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';
import type { BadgeEmphasis } from './BadgeEmphasis.type';

import { BadgeDocs } from '@/docs-components/BadgeDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    emphasis: {
      control: {
        type: 'select',
        options: ['high', 'medium', 'low'] satisfies BadgeEmphasis[],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A small, visually distinct element used to display numbers, small pieces of information, or statuses. Badges are often paired with icons or other components to convey relevant information or updates.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/badge">
          <BadgeDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: 'informative',
    emphasis: 'high',
    label: 'Label',
  },
};

export const Icon: Story = {
  args: {
    appearance: 'blue',
    icon: '16-bolt',
  },
};

export const LabelIcons: Story = {
  args: {
    intent: 'informative',
    label: 'Label',
    beforeIcon: '16-bolt',
    afterIcon: '16-bolt',
  },
};
