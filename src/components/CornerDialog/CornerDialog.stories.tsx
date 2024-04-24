import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { CornerDialog } from './CornerDialog';

import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'CornerDialog',
  component: CornerDialog,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    intent: 'none',
    title: 'Corner Dialog',
    content: 'Description',
    actions: undefined,
    onCloseClick: action('onCloseClick'),
  },
  parameters: {
    docs: {
      description: {
        component:
          'A small, non-intrusive window that appears in the corner of the screen to convey contextual information or prompt user interaction. Often used for hints, tips, or non-essential notifications.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/cornerdialog" />
      ),
    },
  },
} satisfies Meta<typeof CornerDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: 'none',
    title: 'Corner Dialog',
    content: 'Description',
    actions: [
      { label: 'Action', onClick: action('onClick') },
      {
        label: 'Primary Action',
        onClick: action('onClick'),
        appearance: 'primary',
      },
    ],
    onCloseClick: action('onCloseClick'),
  },
};
