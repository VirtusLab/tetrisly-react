import type { Meta, StoryObj } from '@storybook/react';

import { InlineMessage } from './InlineMessage';

import { InlineMessageDocs } from '@/docs-components/InlineMessageDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'InlineMessage',
  component: InlineMessage,
  tags: ['autodocs'],
  args: {
    title: 'Title',
    description: 'Description',
    intent: 'informative',
  },
  argTypes: {
    intent: {
      options: ['informative', 'success', 'warning', 'negative'],
      defaultValue: 'informative',
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A concise, contextual message displayed within the UI to provide users with feedback, guidance, or supplementary information. Inline messages often use color and iconography to convey tone or importance.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/inlinemessage">
          <InlineMessageDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof InlineMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Informative: Story = {};

export const Success: Story = {
  args: {
    intent: 'success',
  },
};

export const Warning: Story = {
  args: {
    intent: 'warning',
  },
};

export const Negative: Story = {
  args: {
    intent: 'negative',
  },
};

export const InformativeWithVeryLongDescription: Story = {
  args: {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu leo suscipit, interdum sapien vitae, finibus arcu. Duis at orci sit amet nunc ullamcorper faucibus. Nullam vitae elit tellus. Aliquam magna risus, placerat nec ornare nec, facilisis sed lectus. Morbi dignissim varius lacus, at molestie tellus bibendum quis. Phasellus ac lacus et nulla viverra vehicula at sed urna. Ut neque eros, egestas eget varius in, condimentum eu sapien. Praesent placerat luctus magna, sed imperdiet augue sodales non. Fusce facilisis dui diam, eget volutpat ligula aliquet eu. Nullam ac nisi in nisi feugiat varius et vel mi. Maecenas vitae elit at neque porttitor sagittis eget ullamcorper nisl. Phasellus sollicitudin risus sit amet semper laoreet.',
  },
};
