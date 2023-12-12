import { Meta, StoryObj } from '@storybook/react';
import { icons } from '@virtuslab/tetrisly-icons';

import { Icon } from './Icon';

import { IconDocs } from '@/docs-components/IconDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Foundations / Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: '20-tetrisly',
  },
  argTypes: {
    name: {
      options: Object.keys(icons),
      defaultValue: undefined,
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A clean, consistent, and pixel-perfect icon library crafted especially for modern UI design.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/foundations/overview/icons">
          <IconDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
