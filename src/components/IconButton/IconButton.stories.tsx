import { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';

import { IconButtonDocs } from '@/docs-components/IconButtonDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  component: IconButton,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component:
          'Specific  Button that lacks the accompanying text label, relying only on an icon or symbol to convey its purpose. The Icon Button helps to design within limited space, as well as allows for a maintaining cleaner interface.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/iconbutton">
          <IconButtonDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};
