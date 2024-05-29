import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { FileItem } from './FileItem';
import { mockTextFile, mockImageFile } from './mocks';

import { FileItemDocs } from '@/docs-components/FileItemDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'FileItem',
  component: FileItem,
  tags: ['autodocs'],
  argTypes: {},
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
  args: {},
};

export const Uploading: Story = {
  args: {
    state: 'uploading',
  },
};

export const Uploaded: Story = {
  args: {},
};

export const Replaceable: Story = {
  args: {
    state: 'replaceable',
  },
};

export const Alert: Story = {
  args: {
    state: 'alert',
  },
};

export const ExtendedUploading: Story = {
  args: {
    state: 'uploading',
    isExtended: true,
  },
};

export const ExtendedUploaded: Story = {
  args: {
    isExtended: true,
  },
};

export const ExtendedReplaceable: Story = {
  args: {
    state: 'replaceable',
    isExtended: true,
  },
};

export const ExtendedAlert: Story = {
  args: {
    state: 'alert',
    isExtended: true,
  },
};

export const ExtendedUploadingFile: Story = {
  args: {
    state: 'uploading',
    isExtended: true,
    thumbnail: 'file',
  },
};

export const ExtendedAlertImage: Story = {
  args: {
    file: mockImageFile(),
    state: 'alert',
    isExtended: true,
    thumbnail: 'photo',
  },
};

export const ExtendedInvertedAlertImage: Story = {
  args: {
    file: mockImageFile(),
    state: 'alert',
    isExtended: true,
    isInverted: true,
    thumbnail: 'photo',
  },
};
