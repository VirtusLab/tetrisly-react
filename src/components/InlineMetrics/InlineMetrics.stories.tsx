import type { Meta, StoryObj } from '@storybook/react';

import { InlineMetrics } from './InlineMetrics';

import { InlineMetricsDocs } from '@/docs-components/InlineMetricsDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Metrics / InlineMetrics',
  component: InlineMetrics,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {},
    docs: {
      description: {
        component:
          'A set of several grouped components that displays numerical data, such as, for example, key performance indicators (KPIs). Metrics provide users with a clear, visual representation of essential statistics or progress.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/metrics">
          <InlineMetricsDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof InlineMetrics>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trend: 'Negative',
    trendValue: '+24%',
    metrics: '$123.12',
    label: 'Total Earnings',
  },
};
