import { Meta, StoryObj } from '@storybook/react';

import { FileIcon } from './FileIcon';

import { FileIconDocs } from '@/docs-components/FileIconDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'File Icon',
  component: FileIcon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => (
        <TetDocs docs="">
          <FileIconDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof FileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconType: 'Archive',
    size: 'Large',
  },
};
