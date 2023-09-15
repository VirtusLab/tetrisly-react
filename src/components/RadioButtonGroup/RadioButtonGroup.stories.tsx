import type { Meta, StoryObj } from '@storybook/react';

import { RadioButtonGroup } from './RadioButtonGroup';

const meta = {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
  tags: ['autodocs'],
  args: {
    name: 'radiobuttons',
    label: 'Label',
    helperText: 'Helper text',
    children: [
      <RadioButtonGroup.Item label="Label" />,
      <RadioButtonGroup.Item label="Label" />,
      <RadioButtonGroup.Item label="Label" />,
      <RadioButtonGroup.Item label="Label" />,
      <RadioButtonGroup.Item label="Label" />,
      <RadioButtonGroup.Item label="Label" />,
      <RadioButtonGroup.Item label="Label" />,
      <RadioButtonGroup.Item label="Label" />,
    ],
  },
} satisfies Meta<typeof RadioButtonGroup>;

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
