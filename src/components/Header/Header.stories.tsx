import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

import { HeaderDocs } from '@/docs-components/HeaderDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A collection of other components that forms the header of a page, used to indicate some subpage or group of content such as a table or listing.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/header">
          <HeaderDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complex: Story = {
  args: {
    title: 'Table title',
    counter: 2,
    bottomBar: true,
    description: 'Description',
    type: 'complex',
    action: [
      {
        label: 'Add new',
      },
      {
        label: 'Export csv',
      },
    ],
  },
};

export const Compact: Story = {
  args: {
    title: 'Table title',
    counter: 0,
    bottomBar: true,
    description: 'Description',
    type: 'compact',
    action: [
      {
        label: 'Add new',
      },
      {
        label: 'Export csv',
      },
    ],
  },
};
