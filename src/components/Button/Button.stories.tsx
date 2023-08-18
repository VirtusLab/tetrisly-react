import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
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
    dropdownIndicator: true,
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
  },
};

export const BareDisabled: Story = {
  ...Bare,
  args: {
    state: 'disabled',
  },
};
