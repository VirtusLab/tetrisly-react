import type { Meta, StoryObj } from '@storybook/react';

import { NewItemButton } from './NewItemButton';

import { NewItemButtonDocs } from '@/docs-components/NewItemButtonDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'NewItemButton',
  component: NewItemButton,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    state: 'normal',
    text: 'text',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A dedicated button for creating new items, such as files, events, or tasks, typically placed in a prominent location and distinguished by an icon or label.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/newitembutton">
          <NewItemButtonDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof NewItemButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'normal',
    text: 'New category',
  },
};

export const Alert: Story = {
  args: {
    state: 'alert',
    text: 'Alert!',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    text: 'Disabled',
  },
};
