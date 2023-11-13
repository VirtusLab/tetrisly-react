import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';

import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Divider',
  component: Divider,
  tags: ['autodocs'],
  render: (args) => (
    <tet.div h="100px">
      <Divider {...args} />
    </tet.div>
  ),
  parameters: {
    docs: {
      description: {
        component:
          'A visual separator that breaks up content or UI elements within a layout. Dividers help to create hierarchy and structure, improving readability and organization of content on the page.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/divider" />
      ),
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <tet.div h="100px">
      <Divider {...args} />
    </tet.div>
  ),
};
