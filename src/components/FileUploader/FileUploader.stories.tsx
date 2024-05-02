import type { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';

import { FileUploader } from './FileUploader';
import { FileUploaderProps } from './FileUploader.props';

import { Button } from '@/components/Button';
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

const FileUploaderDemo: FC<FileUploaderProps> = (props) => {
  const [files, setFiles] = useState<File[]>([]);

  return <FileUploader {...props} value={files} onChange={setFiles} />;
};

export const Default: Story = {
  args: {
    label: {
      label: 'Label',
    },
    helperText: {
      text: 'Helper text',
    },
    variant: 'drag&drop',
    dragAndDropVariant: {
      isExtended: false,
      icon: '20-upload',
      text: (onChooseFileClick) => (
        <>
          Drag & Drop or
          <Button
            appearance="primary"
            variant="bare"
            custom={{
              bare: {
                outline: {
                  focus: 'none',
                },
              },
            }}
            onClick={onChooseFileClick}
          >
            Choose file
          </Button>
          to upload
        </>
      ),
      caption: 'JPG, GIF or PNG. Max size of 800K',
    },
    buttonVariant: {
      text: 'Choose file...',
    },
    inputProps: {
      name: 'myFileInput',
      multiple: true,
      accept: '*',
    },
  },
  render: (props) => <FileUploaderDemo {...props} />,
};
