import type { Meta, StoryObj } from '@storybook/react';

import { InlineSearchInput } from './InlineSearchInput';

const meta = {
  title: 'Components/InlineSearchInput',
  component: InlineSearchInput,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof InlineSearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
