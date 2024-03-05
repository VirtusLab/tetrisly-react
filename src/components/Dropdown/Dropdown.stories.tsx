import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '../Button';

import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <tet.div
        display="flex"
        h="300px"
        justifyContent="center"
        alignItems="center"
      >
        <Story />
      </tet.div>
    ),
  ],

  parameters: {
    docs: {
      description: {
        component:
          'A Modal that displays content and actions in a visually organized manner. Cards are typically used to present grouped information, like products, articles, or user profiles, within a grid or list.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/card" />
      ),
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    renderTrigger: (toggle) => <Button onClick={toggle}>Open Dropdown</Button>,
    children: <>Hello</>,
  },
};
export const ParentWidth: Story = {
  args: {
    renderTrigger: (toggle) => <Button onClick={toggle}>Open Dropdown</Button>,
    children: <>Hello</>,
    parentWidth: true,
  },
};
