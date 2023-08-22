import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from './RadioButton';

const meta = {
  title: 'Components/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};

export const Multiple: Story = {
  render: () => (
    <>
      <RadioButton name="drone" label="Huey" />
      <RadioButton name="drone" label="Devey" />
      <RadioButton name="drone" label="Louie" />
    </>
  ),
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    label: 'Disabled',
  },
};

export const Alert: Story = {
  args: {
    state: 'alert',
  },
};

export const Label: Story = {
  args: {
    label: 'Label',
  },
};

export const HelperText: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper text',
  },
};

export const AlertHelperText: Story = {
  args: {
    state: 'alert',
    label: 'Label',
    helperText: 'Helper text',
  },
};
