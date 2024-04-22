import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Dropdown, DropdownProps } from './Dropdown';
import { DropdownItem } from './DropdownItem';
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

const FunctionalDropdown = ({
  children,
  open: _,
  openChange,
  trigger,
  ...props
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      open={open}
      openChange={setOpen}
      trigger={
        <Button onClick={() => setOpen((prev) => !prev)}>Open Dropdown</Button>
      }
      {...props}
    >
      {children}
    </Dropdown>
  );
};

export const Default: Story = {
  render: FunctionalDropdown,
  args: {
    trigger: <Button>Open Dropdown</Button>,
    open: true,
    children: (
      <>
        <DropdownItem label="Item 1" />
        <DropdownItem label="Item 2" />
      </>
    ),
  },
};
export const ParentWidth: Story = {
  render: FunctionalDropdown,
  args: {
    trigger: <Button>Open Dropdown</Button>,
    open: true,
    children: (
      <>
        <DropdownItem label="Item 1" />
        <DropdownItem label="Item 2" />
      </>
    ),
    parentWidth: true,
  },
};

export const BeforeComponent: Story = {
  render: FunctionalDropdown,
  args: {
    trigger: <Button>Open Dropdown</Button>,
    open: true,
    children: (
      <>
        <DropdownItem
          beforeComponent={{
            type: 'avatar',
            props: { appearance: 'blue', initials: 'MW' },
          }}
          label="Personal Info"
        />
        <DropdownItem
          label="Calculator"
          beforeComponent={{
            type: 'icon',
            props: { name: '20-calculator' },
          }}
        />
      </>
    ),
  },
};
