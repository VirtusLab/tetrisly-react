import type { Meta, StoryObj } from '@storybook/react';

import { HelperText } from './HelperText';

const meta = {
  title: 'Components/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  args: {
    text: 'Helper text',
    intent: 'none',
  },
  argTypes: {
    intent: {
      options: ['none', 'alert', 'success'],
      defaultValue: 'none',
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof HelperText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultWithIcon: Story = {
  args: {
    beforeIcon: '20-alert-fill',
  },
};

export const DefaultWithCounter: Story = {
  args: {
    counter: {
      current: 0,
      max: 0,
    },
  },
};
