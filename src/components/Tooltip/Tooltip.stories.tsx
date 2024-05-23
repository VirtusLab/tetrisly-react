import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from './Tooltip';

import { TetDocs } from '@/docs-components/TetDocs';
import { TooltipDocs } from '@/docs-components/TooltipDocs';

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    text: 'Tooltip placeholder',
    arrowheadPosition: 'start',
    tooltipPosition: 'top',
  },
  argTypes: {
    arrowheadPosition: {
      options: ['start', 'middle', 'end'],
      defaultValue: 'start',
      control: { type: 'radio' },
    },
    tooltipPosition: {
      options: ['top', 'bottom', 'left', 'right'],
      defaultValue: 'top',
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      Description: {
        component:
          'Brief, additional information or context that appears when the user hovers over or focuses on a particular element. Tooltips help provide explanations, hints, or tips without cluttering up the interface.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/tooltip">
          <TooltipDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Tooltip placeholder',
    arrowheadPosition: 'middle',
    tooltipPosition: 'top',
  },
};
