import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Badge } from '../Badge';

import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: (
      <tet.div
        display="flex"
        flexDirection="column"
        gap="$space-component-gap-2xLarge"
        minWidth="432px"
      >
        <Badge appearance="blue" emphasis="medium" label="In Progress" />
        <tet.div display="flex" flexDirection="column">
          <tet.span color="$color-content-secondary" text="$typo-body-small">
            Task:
          </tet.span>
          <tet.span color="$color-content-primary" text="$typo-body-large">
            Creating React components
          </tet.span>
        </tet.div>
        <tet.div display="flex" gap="$space-component-gap-2xLarge">
          <tet.div display="flex" flexDirection="column" flexGrow={1}>
            <tet.span color="$color-content-secondary" text="$typo-body-small">
              Created
            </tet.span>
            <tet.span color="$color-content-primary" text="$typo-body-medium">
              Mon, 14 Feb 2023
            </tet.span>
          </tet.div>
          <tet.div display="flex" flexDirection="column" flexGrow={1}>
            <tet.span color="$color-content-secondary" text="$typo-body-small">
              Last modified
            </tet.span>
            <tet.span color="$color-content-primary" text="$typo-body-medium">
              Today, 5:23 am
            </tet.span>
          </tet.div>
        </tet.div>
      </tet.div>
    ),
  },
  parameters: {
    docs: {
      description: {
        component:
          'A Modal that displays content and actions in a visually organized manner. Cards are typically used to present grouped information, like products, articles, or user profiles, within a grid or list.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/card" />
      ),
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: {
      title: 'Card Title',
      description: 'Card Description',
      beforeComponent: {
        icon: { name: '20-wallet' },
      },
      actions: [
        { label: 'Add', onClick: () => {}, beforeIcon: '20-plus' },
        { label: 'Cancel', onClick: () => {} },
      ],
    },

    footer: {
      actions: [
        { label: 'Details', appearance: 'secondary' },
        { label: 'Mark as resolved', appearance: 'primary' },
      ],
    },
  },
};

export const Content: Story = {};
export const Header: Story = {
  args: {
    header: {
      title: 'Card Title',
    },
  },
};
export const HeaderDescription: Story = {
  args: {
    header: { title: 'Card Title', description: 'Card Description' },
  },
};

export const HeaderIcon: Story = {
  args: {
    header: {
      title: 'Card Title',
      beforeComponent: {
        icon: { name: '20-wallet' },
      },
    },
  },
};

export const HeaderAvatar: Story = {
  args: {
    header: {
      title: 'Card Title',
      beforeComponent: {
        avatar: {
          image: 'https://thispersondoesnotexist.com/',
        },
      },
    },
  },
};

export const HeaderActions: Story = {
  args: {
    header: {
      title: 'Card Title',
      actions: [
        { label: 'Add', onClick: () => {}, beforeIcon: '20-plus' },
        { label: 'Cancel', onClick: () => {} },
      ],
    },
  },
};

export const Footer: Story = {
  args: {
    footer: {
      actions: [
        { label: 'Add', onClick: () => {}, beforeIcon: '20-plus' },
        { label: 'Cancel', onClick: () => {} },
      ],
    },
  },
};
