import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './CheckboxGroup';

const meta = {
  title: 'Components/Checkbox Group',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: {
    name: 'checkboxes',
    label: 'Label',
    helperText: 'Helper text',
    children: [
      <CheckboxGroup.Item label="Label" />,
      <CheckboxGroup.Item label="Label" />,
      <CheckboxGroup.Item label="Label" />,
      <CheckboxGroup.Item label="Label" />,
      <CheckboxGroup.Item label="Label" />,
      <CheckboxGroup.Item label="Label" />,
      <CheckboxGroup.Item label="Label" />,
      <CheckboxGroup.Item label="Label" />,
    ],
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    column: 4,
  },
};

export const Vertical: Story = {
  args: {
    column: 1,
  },
};
