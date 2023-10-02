import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

import { TagDocs } from '@/docs-components/TagDocs.tsx';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A compact, visually distinct element used to label, categorize, or organize content. Tags can help users quickly identify and filter items by attributes such as keywords, topics, or statuses.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/tag">
          <TagDocs />
        </TetDocs>
      ),
    },
  },
  args: {
    label: 'Tag',
    onClick: () => null,
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BeforeAvatarComponent: Story = {
  args: {
    beforeComponent: {
      type: 'Avatar',
      props: {
        initials: 'A',
        emphasis: 'high',
      },
    },
  },
};

export const WithRemoveButton: Story = {
  args: {
    state: undefined,
    onCloseClick: () => null,
  },
};
