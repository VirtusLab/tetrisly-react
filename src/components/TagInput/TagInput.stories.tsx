import type { Meta, StoryObj } from '@storybook/react';

import { TagInput } from './TagInput';
import { Tag } from '../Tag/Tag';

import { TagInputDocs } from '@/docs-components/TagInputDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Tag Input',
  component: TagInput,
  tags: ['autodocs'],
  args: {
    helperText: 'Helper text',
    label: 'label',
    isValidationError: false,
    children: ['Tag 1', 'Tag 2'].map((tagLabel) => (
      <Tag label="elo" key={tagLabel} />
    )),
  },
  argTypes: {
    isValidationError: {
      options: [true, false],
      defaultValue: false,
      control: { type: 'radio' },
    },
  },

  parameters: {
    docs: {
      description: {
        component:
          'A text input field designed for entering multiple tags or keywords, allowing users to create, edit, or remove tags as needed. Tag inputs often provide suggestions or autocomplete functionality to enhance the user experience.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/taginput">
          <TagInputDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    helperText: 'Helper text',
    label: 'label',
    isValidationError: false,
    children: ['Tag1', 'Tag2'].map((tagLabel) => (
      <Tag label={tagLabel} key={tagLabel} onCloseClick={() => null} />
    )),
    state: 'alert',
  },
};

export const ValidationErrorNo: Story = {
  args: {
    helperText: 'Helper text',
    label: 'label',
    isValidationError: false,
    children: ['Tag1', 'Tag2'].map((tagLabel) => (
      <Tag label={tagLabel} key={tagLabel} onCloseClick={() => null} />
    )),
  },
};

export const ValidationErrorYes: Story = {
  args: {
    helperText: 'Helper text',
    label: 'label',
    isValidationError: true,
    children: ['Tag1', 'Tag2'].map((tagLabel) => (
      <Tag label={tagLabel} key={tagLabel} onCloseClick={() => null} />
    )),
  },
};
