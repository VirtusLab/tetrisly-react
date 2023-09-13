import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  component: Select,
  tags: ['autodocs'],
  args: {
    placeholder: 'Input placeholder',
  },
  argTypes: {},

  parameters: {
    docs: {
      description: {
        component:
          'A component that allows users to choose one or more options from a list, typically presented as a dropdown or pop-up menu. Select components are commonly used in forms and settings.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/select" />
      ),
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const Alert: Story = {
  args: {
    state: 'alert',
  },
};

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

export const BeforeAvatarComponent: Story = {
  args: {
    beforeComponent: {
      type: 'Avatar',
      props: {
        initials: 'A',
      },
    },
  },
};
