import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder',
  },
} satisfies Meta<typeof TextInput>;

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

export const WithClearButton: Story = {
  args: {
    hasClearButton: true,
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

export const AfterDropdownComponent: Story = {
  args: {
    afterComponent: {
      type: 'Dropdown',
      props: {
        label: 'Action',
      },
    },
  },
};

export const AfterIconComponent: Story = {
  args: {
    afterComponent: {
      type: 'Icon',
      props: {
        name: '20-bolt',
      },
    },
  },
};

export const AfterIconButtonComponent: Story = {
  args: {
    afterComponent: {
      type: 'IconButton',
      props: {
        icon: '20-filter',
      },
    },
  },
};

export const AfterPrefixComponent: Story = {
  args: {
    afterComponent: {
      type: 'Sufix',
      props: {
        text: 'Sufix',
      },
    },
  },
};

export const AfterButtonComponent: Story = {
  args: {
    afterComponent: {
      type: 'Button',
      props: {
        label: 'Action',
      },
    },
  },
};
