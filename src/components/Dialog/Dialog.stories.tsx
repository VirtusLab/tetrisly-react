import { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';
import { customStyleForDocs } from './Dialog.styles';
import { DialogFooter, DialogSize } from './types';
import { Checkbox } from '../Checkbox';
import { Dimmer } from '../Dimmer';

import { DialogDocs } from '@/docs-components/DialogDocs';
import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    actions: {
      control: {
        type: 'object',
      },
    },
    children: {
      control: {
        type: 'string',
      },
    },
    content: {
      type: 'string',
    },
    custom: {
      control: {
        type: 'object',
      },
    },
    footer: {
      control: 'select',
      options: ['confirmation', 'decision', 'steps'] satisfies DialogFooter[],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'] satisfies DialogSize[],
    },
    hasCloseButton: {
      control: 'radio',
      options: [true, false],
    },
    intent: {
      value: 'none',
      control: 'radio',
      options: ['destructive', 'warning', 'none'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A temporary, focused window that overlays the main content. Often used to prompt user input or present important information that requires interaction, such as confirmation or error messages.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/dialog">
          <DialogDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'title',
    content: 'content',
    hasCloseButton: true,
    footer: 'steps',
    actions: [{ label: 'first action' }, { label: 'second action' }],
    size: 'small',
    custom: customStyleForDocs, // is it ok? Different prezentation in docs and different in usage
  },
};

export const Decision: Story = {
  render: () => (
    <tet.div
      padding="40"
      h="400px"
      borderRadius={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Dimmer />
      <Dialog
        title="Title"
        content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        footer="decision"
        actions={[{ label: 'Cancel' }, { label: 'Accept' }]}
      />
    </tet.div>
  ),
};

export const Confirmation: Story = {
  render: () => (
    <tet.div
      padding="40"
      h="400px"
      borderRadius={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Dimmer />
      <Dialog
        title="Title"
        content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        footer="confirmation"
        actions={[{ label: 'Accept' }]}
        intent="warning"
      />
    </tet.div>
  ),
};

export const Steps: Story = {
  render: () => (
    <tet.div
      padding="40"
      h="400px"
      borderRadius={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Dimmer />
      <Dialog
        title="Title"
        content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        footer="steps"
        actions={[{ label: 'Previous step' }, { label: 'Next step' }]}
      />
    </tet.div>
  ),
};

export const Destructive: Story = {
  render: () => (
    <tet.div
      padding="40"
      h="400px"
      borderRadius={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Dimmer />
      <Dialog
        title="Title"
        content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        footer="decision"
        actions={[{ label: 'Cancel' }, { label: 'Remove' }]}
        intent="destructive"
      />
    </tet.div>
  ),
};

export const AdditionalAction: Story = {
  render: () => (
    <tet.div
      padding="40"
      h="400px"
      borderRadius={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Dimmer />
      <Dialog
        title="Title"
        content="Everything in Tetrisly contains Auto Layout. Moreover, we’ve redefined all variants and we have created brand-new components."
        footer="decision"
        actions={[{ label: 'Cancel' }, { label: 'Accept' }]}
        additionalAction={{ label: 'Find out more' }}
      />
    </tet.div>
  ),
};

export const NestedComponentInsideFooter: Story = {
  args: {
    title: 'title',
    content: 'content',
    hasCloseButton: true,
    footer: 'decision',
    actions: [{ label: 'first action' }, { label: 'second action' }],
    size: 'medium',
    custom: customStyleForDocs,
    children: <Checkbox label="Do not show me again" />,
  },
};
