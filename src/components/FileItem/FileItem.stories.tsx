import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { FileItem } from './FileItem';
import { mockTextFile } from './mocks';

import { FileItemDocs } from '@/docs-components/FileItemDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'FileItem',
  component: FileItem,
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
          <FileItemDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof FileItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    file: mockTextFile(),
    state: 'uploaded',
    isInverted: false,
    isExtended: false,
    thumbnail: 'none',
    uploadedPercentage: 25,
    timeLeftText: '7 seconds left',
    alertText: 'Short alert text',
    onReplaceClick: action('onReplaceClick'),
    onRetryClick: action('onRetryClick'),
    onCloseClick: action('onCloseClick'),
  },
};
