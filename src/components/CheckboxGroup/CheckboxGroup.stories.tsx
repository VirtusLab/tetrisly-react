import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup } from './CheckboxGroup';

import { CheckboxGroupDocs } from '@/docs-components/CheckboxGroupDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  tags: ['autodocs'],
  args: {
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
  parameters: {
    docs: {
      description: {
        component:
          'A component that allows users to select one or multiple options from a set. Checkboxes present a clear visual indication of the selected state, making them ideal for forms and settings.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/checkbox">
          <CheckboxGroupDocs />
        </TetDocs>
      ),
    },
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
