import type { Meta, StoryObj } from '@storybook/react';

import { FileUploader } from './FileUploader';

import { FileUploaderDocs } from '@/docs-components/FileUploaderDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  args: {
    // hasStroke: false,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      page: () => (
        <TetDocs docs={null}>
          <FileUploaderDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // appearance: 'red',
  },
};
// export const Default: Story = {
//   args: {
//     // appearance: 'red',
//   },
// };
