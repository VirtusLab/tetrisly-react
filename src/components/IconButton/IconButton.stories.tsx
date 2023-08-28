import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { IconButton } from './IconButton';
import { IconButtonProps } from './IconButton.props';

import { IconButtonDocs } from '@/docs-components/IconButtonDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Figma "Type" props',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    appearance: {
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },

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

export const Default: Story = {
  args: {
    icon: '20-placeholder',
  },
};

const ClickableRender = (props: IconButtonProps) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [loading]);
  return (
    <IconButton
      {...props}
      state={loading ? 'loading' : undefined}
      onClick={() => setLoading((l) => !l)}
    />
  );
};

export const Clickable: Story = {
  args: {
    icon: '20-placeholder',
  },
  render: ClickableRender,
};
