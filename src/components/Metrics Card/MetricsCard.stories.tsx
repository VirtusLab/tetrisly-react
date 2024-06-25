import type { Meta, StoryObj } from '@storybook/react';

import { MetricsCard } from './MetricsCard';

import { MetricsCardDocs } from '@/docs-components/MetricsCardDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Metrics / MetricsCard',
  component: MetricsCard,
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
          <MetricsCardDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof MetricsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: 'Positive',
    trend: 'Positive',
    trendValue: '+24%',
    metrics: '$123.12',
    label: 'Total Earnings',
    hasIcon: true,
    hasMoreIcon: true,
    hasTrend: true,
    iconPosition: 'Top',
  },
};

export const IconPositionLeft: Story = {
  args: {
    intent: 'Negative',
    trend: 'Negative',
    trendValue: '+24%',
    metrics: '$123.12',
    label: 'Total Earnings',
    hasIcon: true,
    hasMoreIcon: true,
    hasTrend: true,
    iconPosition: 'Left',
  },
};
