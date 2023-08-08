import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

const meta = {
  title: 'Components/Text Input',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BeforeIconComponent: Story = {
  args: {
    beforeComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt',
      },
    },
  },
};

export const BeforePrefixComponent: Story = {
  args: {
    beforeComponent: {
      type: 'Prefix',
      props: {
        text: 'Prefix',
      },
    },
  },
};

export const BeforeDropdownComponent: Story = {
  args: {
    beforeComponent: {
      type: 'Dropdown',
      props: {
        label: 'Action',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    beforeComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt',
      },
    },
    afterComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt',
      },
    },
    state: 'disabled',
  },
};
