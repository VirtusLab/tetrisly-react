import { Meta, StoryObj } from '@storybook/react';

import { Status } from './Status';
import { StatusEmphasis } from './StatusEmphasis.type';

import { StatusDocs } from '@/docs-components/StatusDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Status',
  component: Status,
  tags: ['autodocs'],
  argTypes: {
    emphasis: {
      control: {
        type: 'select',
        options: ['high', 'medium', 'low'] satisfies StatusEmphasis[],
      },
    },
  },
  args: {
    appearance: 'grey',
    emphasis: 'high',
  },
  parameters: {
    docs: {
      description: {
        component:
          'An indicator that conveys the current state or condition of a process, item, or user. Status indicators often use colors, icons, or text to communicate information, such as online presence, approval, or completion.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/status">
          <StatusDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    appearance: 'grey',
    emphasis: 'high',
    label: 'status',
  },
};
