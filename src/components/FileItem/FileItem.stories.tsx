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
  args: {
    file: mockTextFile(),
    state: 'uploaded',
    isExtended: false,
    thumbnail: 'none',
    onCloseClick: action('onCloseClick'),
  },
};

export const Uploading: Story = {
  args: {
    file: mockTextFile(),
    state: 'uploading',
    uploadedPercentage: 25,
    onCloseClick: action('onCloseClick'),
  },
};

export const Uploaded: Story = {
  args: {
    file: mockTextFile(),
    state: 'uploaded',
    onCloseClick: action('onCloseClick'),
  },
};

export const Replaceable: Story = {
  args: {
    file: mockTextFile(),
    state: 'replaceable',
    onReplaceClick: action('onReplaceClick'),
    onCloseClick: action('onCloseClick'),
  },
};

export const Alert: Story = {
  args: {
    file: mockTextFile(),
    state: 'alert',
    alertText: 'Short alert text',
    onRetryClick: action('onRetryClick'),
    onCloseClick: action('onCloseClick'),
  },
};

export const ExtendedUploading: Story = {
  args: {
    file: mockTextFile(),
    state: 'uploading',
    isExtended: true,
    uploadedPercentage: 25,
    timeLeftText: '7 seconds left',
    onCloseClick: action('onCloseClick'),
  },
};

export const ExtendedUploaded: Story = {
  args: {
    file: mockTextFile(),
    state: 'uploaded',
    isExtended: true,
    onCloseClick: action('onCloseClick'),
  },
};

export const ExtendedReplaceable: Story = {
  args: {
    file: mockTextFile(),
    state: 'replaceable',
    isExtended: true,
    onReplaceClick: action('onReplaceClick'),
    onCloseClick: action('onCloseClick'),
  },
};

export const ExtendedAlert: Story = {
  args: {
    file: mockTextFile(),
    state: 'alert',
    isExtended: true,
    alertText: 'Short alert text',
    onRetryClick: action('onRetryClick'),
    onCloseClick: action('onCloseClick'),
  },
};

export const ExtendedUploadingFile: Story = {
  args: {
    file: mockTextFile(),
    state: 'uploading',
    isExtended: true,
    thumbnail: 'file',
    uploadedPercentage: 25,
    timeLeftText: '7 seconds left',
    onCloseClick: action('onCloseClick'),
  },
};

export const ExtendedAlertImage: Story = {
  args: {
    file: mockImageFile(),
    state: 'alert',
    isExtended: true,
    thumbnail: 'photo',
    alertText: 'Short alert text',
    onReplaceClick: action('onReplaceClick'),
    onRetryClick: action('onRetryClick'),
    onCloseClick: action('onCloseClick'),
  },
};

export const ExtendedInvertedAlertImage: Story = {
  args: {
    file: mockImageFile(),
    state: 'alert',
    isExtended: true,
    isInverted: true,
    thumbnail: 'photo',
    alertText: 'Short alert text',
    onReplaceClick: action('onReplaceClick'),
    onRetryClick: action('onRetryClick'),
    onCloseClick: action('onCloseClick'),
  },
};
