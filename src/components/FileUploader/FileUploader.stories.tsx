import type { Meta, StoryObj } from '@storybook/react';

import { FileUploader } from './FileUploader';

import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      description: {
        component:
          'Enable users to upload specific files, such as images, documents, or videos, to a particular location. The user can perform this action by dragging and dropping files into the designated area or browsing local storage.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/fileuploader">
          <div>TBD</div>
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: {
      label: 'Label',
    },
    helperText: {
      text: 'Helper text',
    },
    variant: 'drag&drop',
  },
};
