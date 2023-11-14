import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Label } from '../Label';

import { PopoverDocs } from '@/docs-components/PopoverDocs';
import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    content: (
      <tet.div display="flex" gap="12px" alignItems="center">
        <Avatar
          appearance="image"
          img={{
            src: 'https://thispersondoesnotexist.com/',
            alt: 'Random person',
          }}
        />
        <tet.div display="flex" flexDirection="column">
          <tet.span
            color="$color-content-primary"
            text="$typo-body-strong-large"
          >
            John Doe
          </tet.span>
          <tet.span color="$color-content-tertiary" text="$typo-body-medium">
            johndoe@gmail.com
          </tet.span>
        </tet.div>
        <Button
          appearance="secondary"
          size="small"
          beforeIcon="20-check-large"
          label="Following"
        />
      </tet.div>
    ),
  },
  parameters: {
    docs: {
      description: {
        component:
          'A temporary, floating modal view that displays additional information or options when a user interacts with a specific element. Popovers can be triggered by various actions, such as hovering, clicking, or focusing.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/popover">
          <PopoverDocs />
        </TetDocs>
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
        <Button label="John Doe" />
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
      <tet.div
        display="flex"
        alignItems="center"
        gap="$space-component-gap-large"
      >
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
