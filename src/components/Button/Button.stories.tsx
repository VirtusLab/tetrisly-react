import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

import { ButtonDocs } from '@/docs-components/ButtonDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button label',
  },
  argTypes: {
    state: {
      options: [undefined, 'disabled', 'loading', 'selected'],
      defaultValue: undefined,
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      control: { type: 'radio' },
    },
    variant: {
      options: ['default', 'ghost', 'bare'],
      defaultValue: 'default',
      control: { type: 'radio' },
    },
    intent: {
      options: ['none', 'success', 'destructive'],
      defaultValue: 'none',
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A versatile and interactive element. Buttons allow users to perform actions and navigate through an application. They come in various styles and sizes, providing clear visual cues and feedback to users.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/button">
          <ButtonDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
  },
};

export const DefaultLoading: Story = {
  ...Default,
  args: {
    state: 'loading',
  },
};

export const DefaultDisabled: Story = {
  ...Default,
  args: {
    state: 'disabled',
  },
};

export const DefaultBeforeIcon: Story = {
  ...Default,
  args: {
    beforeIcon: '20-placeholder',
  },
};

export const DefaultAfterIcon: Story = {
  ...Default,
  args: {
    afterIcon: '20-placeholder',
  },
};

export const DefaultDropdown: Story = {
  ...Default,
  args: {
    hasDropdownIndicator: true,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
  },
};

export const GhostLoading: Story = {
  ...Ghost,
  args: {
    state: 'loading',
  },
};

export const GhostDisabled: Story = {
  ...Ghost,
  args: {
    state: 'disabled',
  },
};

export const Bare: Story = {
  args: {
    variant: 'bare',
  },
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
    size: {
      options: ['medium', 'large'],
      defaultValue: 'medium',
      control: { type: 'radio' },
    },
  },
};

export const BareLoading: Story = {
  ...Bare,
  args: {
    state: 'loading',
    variant: 'bare',
  },
};

export const BareDisabled: Story = {
  ...Bare,
  args: {
    state: 'disabled',
    variant: 'bare',
  },
};

// should automatically fill the width of the container
export const WithFlexContainer: Story = {
  render: () => (
    <div style={{ display: 'flex', width: '400px', flexDirection: 'column' }}>
      <Button label="Button 1" />
    </div>
  ),
};
