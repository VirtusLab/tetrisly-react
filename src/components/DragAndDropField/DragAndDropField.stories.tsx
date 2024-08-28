import type { Meta, StoryObj } from '@storybook/react';

import { DragAndDropField } from './DragAndDropField';

import { DragAndDropFieldDocs } from '@/docs-components/DragAndDropFieldDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Drag & Drop Field',
  component: DragAndDropField,
  tags: ['autodocs'],
  args: {
    extended: false,
    caption: 'JPG, GIF or PNG. Max size of 800K',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Enable users to upload specific files, such as images, documents, or videos, to a particular location. The user can perform this action by dragging and dropping files into the designated area or browsing local storage.',
      },
      page: () => (
        <TetDocs docs={null}>
          <DragAndDropFieldDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof DragAndDropField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
