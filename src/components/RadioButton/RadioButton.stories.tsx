import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from './RadioButton';

import { RadioButtonDocs } from '@/docs-components/RadioButtonDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A component that enables users to choose a single option from a set of mutually exclusive choices. Radio buttons provide clear visual feedback for the selected state, and are commonly used in forms and settings.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/radiobutton">
          <RadioButtonDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    isChecked: true,
    onChange: () => {},
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
