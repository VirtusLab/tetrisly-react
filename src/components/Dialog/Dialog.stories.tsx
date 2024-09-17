import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Dialog } from './Dialog';
import { customStyleForDocs } from './Dialog.styles';
import { Button } from '../Button';
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
    docsPresentation: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: 'Title',
    actions: [
      {
        label: 'Primary action',
        onClick: action('onClick'),
      },
      {
        label: 'Secondary action',
        onClick: action('onClick'),
      },
    ],
    onCloseClick: action('onCloseClick'),
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
    onCloseClick: () => {},
    footer: 'steps',
    actions: [{ label: 'first action' }, { label: 'second action' }],
    size: 'small',
    custom: customStyleForDocs, // is it ok? I need different prezentation in docs and different in usage
  },
};

// TODO not sure if Dimmer should be included in Dialog compinent or user should decide if he/she uses it

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

export const NestedComponentInsideFooter: Story = {
  args: {
    title: 'title',
    content: 'content',
    onCloseClick: () => {},
    footer: 'decision',
    actions: [{ label: 'first action' }, { label: 'second action' }],
    size: 'medium',
    custom: customStyleForDocs,
    children: <Checkbox label="Do not show me again" />,
  },
};

export const NestedButtonInsideFooter: Story = {
  args: {
    title: 'title',
    content: 'content',
    onCloseClick: () => {},
    footer: 'decision',
    actions: [{ label: 'first action' }, { label: 'second action' }],
    size: 'medium',
    custom: customStyleForDocs,
    children: <Button label="Find out more" />,
  },
};

export const AdditionalCustomContent: Story = {
  args: {
    title: 'title',
    content: 'content',
    onCloseClick: () => {},
    footer: 'decision',
    actions: [{ label: 'first action' }, { label: 'second action' }],
    size: 'medium',
    custom: customStyleForDocs,
    children: <div>Additional component</div>,
  },
};

export const AdditionalCustomContentWithButton: Story = {
  args: {
    title: 'title',
    content: 'content',
    onCloseClick: () => {},
    footer: 'decision',
    actions: [{ label: 'first action' }, { label: 'second action' }],
    size: 'medium',
    custom: customStyleForDocs,
    children: (
      <div>
        Additional component with button
        <br />
        <Button label="button" />
      </div>
    ),
  },
};
