import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Button } from '../Button';

import { tet } from '@/tetrisly';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    content:
      'Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components.',
    children: <Button label="Click me" />,
  },
  render: (props) => (
    <tet.div
      h="320px"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Popover {...props} />
    </tet.div>
  ),
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bottom: Story = {
  args: {
    origin: 'bottom',
  },
};

export const Left: Story = {
  args: {
    origin: 'left',
  },
};

export const Right: Story = {
  args: {
    origin: 'right',
  },
};
