import type { Meta, StoryObj } from '@storybook/react';

import { RadioButtonGroup } from './RadioButtonGroup';

import { RadioButtonGroupDocs } from '@/docs-components/RadioButtonGroupDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
  tags: ['autodocs'],
  args: {
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
  parameters: {
    docs: {
      description: {
        component:
          'A component that enables users to choose a single option from a set of mutually exclusive choices. Radio buttons provide clear visual feedback for the selected state, and are commonly used in forms and settings.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/radiobutton">
          <RadioButtonGroupDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    column: 4,
    name: 'my-radio-group',
  },
};

export const Vertical: Story = {
  args: {
    column: 1,
    name: 'another-radio-group',
  },
};
