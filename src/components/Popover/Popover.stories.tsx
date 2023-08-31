import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Avatar } from '../Avatar/Avatar';
import { Button } from '../Button';
import { Label } from '../Label/Label';

import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    content:
      'Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components.',
    width: '320px',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A temporary, floating modal view that displays additional information or options when a user interacts with a specific element. Popovers can be triggered by various actions, such as hovering, clicking, or focusing.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/popover" />
      ),
    },
  },
  render: (props) => (
    <tet.div
      h="320px"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Popover {...props}>
        <Button label="Click me" />
      </Popover>
    </tet.div>
  ),
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};

export const CustomContent: Story = {
  args: {
    content: (
      <tet.div display="flex" alignItems="center" gap="component-gap-large">
        <Avatar initials="JD" size="medium" />
        <Label label="John Doe" />
        <Button
          appearance="secondary"
          label="Following"
          beforeIcon="20-check-large"
        />
      </tet.div>
    ),
    width: '300px',
  },
};
