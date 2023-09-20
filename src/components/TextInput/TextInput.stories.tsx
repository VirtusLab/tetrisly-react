import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

import { TetDocs } from '@/docs-components/TetDocs';
import { TextInputDocs } from '@/docs-components/TextInputDocs';

const meta = {
  title: 'TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    placeholder: 'Placeholder',
  },
  parameters: {
    docs: {
      description: {
        component:
          'A versatile and interactive element. Buttons allow users to perform actions and navigate through an application. They come in various styles and sizes, providing clear visual cues and feedback to users.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/textinput">
          <TextInputDocs />
        </TetDocs>
      ),
    },
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

export const AfterSufixComponent: Story = {
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
