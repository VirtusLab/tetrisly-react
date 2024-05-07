import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import { CornerDialog } from './CornerDialog';

import { CornerDialogDocs } from '@/docs-components/CornerDialogDocs';
import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'CornerDialog',
  component: CornerDialog,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    intent: 'none',
    title: 'Corner Dialog',
    content: 'Description',
    actions: undefined,
    onCloseClick: action('onCloseClick'),
  },
  parameters: {
    docs: {
      description: {
        component:
          'A small, non-intrusive window that appears in the corner of the screen to convey contextual information or prompt user interaction. Often used for hints, tips, or non-essential notifications.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/cornerdialog">
          <CornerDialogDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof CornerDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    intent: 'none',
    title: 'Corner Dialog',
    content: 'Description',
    actions: [
      { label: 'Action', onClick: action('onClick') },
      {
        label: 'Primary Action',
        onClick: action('onClick'),
        appearance: 'primary',
      },
    ],
    onCloseClick: action('onCloseClick'),
  },
};

export const Decision: Story = {
  args: {
    intent: 'none',
    title: 'Title',
    content: 'Description',
    actions: [
      { label: 'Cancel', onClick: action('onCancelClick') },
      {
        label: 'Accept',
        onClick: action('onAcceptClick'),
        appearance: 'primary',
      },
    ],
    onCloseClick: action('onCloseClick'),
  },
};

export const Confirmation: Story = {
  args: {
    intent: 'none',
    title: 'Title',
    content: 'Description',
    actions: [
      {
        label: 'Accept',
        onClick: action('onAcceptClick'),
        appearance: 'primary',
      },
    ],
    onCloseClick: undefined,
  },
};

export const NegativeWithDestructiveButton: Story = {
  args: {
    intent: 'negative',
    title: 'Title',
    content: 'Description',
    actions: [
      { label: 'Cancel', onClick: action('onCancelClick') },
      {
        label: 'Remove',
        onClick: action('onRemoveClick'),
        appearance: `primary`,
        intent: 'destructive',
      },
    ],
    onCloseClick: action('onCloseClick'),
  },
};

export const WarningAndAdditionalAction: Story = {
  args: {
    intent: 'warning',
    title: 'Title',
    content: 'Description',
    actions: [
      {
        label: 'Find out more',
        onClick: action('onFindOutMoreClick'),
        custom: {
          default: {
            position: 'absolute',
            left: 0,
          },
        },
      },
      { label: 'Cancel', onClick: action('onCancelClick') },
      {
        label: 'Accept',
        onClick: action('onAcceptClick'),
        appearance: 'primary',
      },
    ],
    onCloseClick: action('onCloseClick'),
    custom: {
      innerElements: {
        footer: {
          position: 'relative',
        },
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    intent: 'none',
    title: 'Corner Dialog with custom content',
    content: (
      <tet.div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        <tet.span color="$color-blue-0" fontWeight="$font-weight-600">
          Morbi pellentesque elit ut sem accumsan, eget maximus erat eleifend.
        </tet.span>
        Vestibulum ac tortor nunc.{' '}
        <tet.span textDecoration="underline">
          Nam tincidunt nibh eget nulla aliquet, et auctor dui rhoncus. Donec
          bibendum rhoncus lacus vel scelerisque.
        </tet.span>
        Suspendisse feugiat ligula quis eros interdum varius. Ut nec ex est.
      </tet.div>
    ),
    actions: [
      { label: 'Action', onClick: action('onClick') },
      {
        label: 'Primary Action',
        onClick: action('onClick'),
        appearance: 'primary',
      },
    ],
    onCloseClick: action('onCloseClick'),
  },
};
