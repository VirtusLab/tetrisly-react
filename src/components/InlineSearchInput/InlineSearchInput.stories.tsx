import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEventHandler, useState } from 'react';

import { InlineSearchInput } from './InlineSearchInput';

import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  component: InlineSearchInput,
  tags: ['autodocs'],
  argTypes: {},

  parameters: {
    docs: {
      description: {
        component:
          'A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/searchinput" />
      ),
    },
  },
} satisfies Meta<typeof InlineSearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  render: function ControlledSearchInput() {
    const [value, setValue] = useState('Tetrisly.com');

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value);
    };
    return <InlineSearchInput value={value} onChange={handleOnChange} />;
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};
