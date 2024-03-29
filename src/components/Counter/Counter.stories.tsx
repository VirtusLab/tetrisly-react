import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';

import { CounterDocs } from '@/docs-components/CounterDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Counter',
  component: Counter,
  tags: ['autodocs'],
  args: {
    number: 24,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A numerical indicator displaying the current count of items, events, or actions. Counters can be used to show unread messages, items in a shopping cart, or other quantities that require the user’s attention.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/counter">
          <CounterDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Red: Story = {
  args: {
    appearance: 'red',
  },
};

export const Grey: Story = {
  args: {
    appearance: 'grey',
  },
};

export const Blue: Story = {
  args: {
    appearance: 'blue',
  },
};

export const Green: Story = {
  args: {
    appearance: 'green',
  },
};

export const Orange: Story = {
  args: {
    appearance: 'orange',
  },
};

export const DefaultHigh: Story = {
  args: {
    emphasis: 'high',
  },
};

export const RedHigh: Story = {
  args: {
    appearance: 'red',
    emphasis: 'high',
  },
};

export const GreyHigh: Story = {
  args: {
    appearance: 'grey',
    emphasis: 'high',
  },
};

export const BlueHigh: Story = {
  args: {
    appearance: 'blue',
    emphasis: 'high',
  },
};

export const GreenHigh: Story = {
  args: {
    appearance: 'green',
    emphasis: 'high',
  },
};

export const OrangeHigh: Story = {
  args: {
    appearance: 'orange',
    emphasis: 'high',
  },
};
