import type { Meta, StoryObj } from '@storybook/react';

import { HelperText } from './HelperText';

import { HelperTextDocs } from '@/docs-components/HelperTextDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Global Primitives / HelperText',
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
  parameters: {
    docs: {
      page: () => (
        <TetDocs docs={null}>
          <HelperTextDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof HelperText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultWithIcon: Story = {
  args: {
    beforeIcon: true,
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
