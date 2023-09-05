import type { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';

const meta = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
  args: {
    number: 24,
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
