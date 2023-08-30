import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

import { AvatarDocs } from '@/docs-components/AvatarDocs';
import { TetDocs } from '@/docs-components/TetDocs';
import { appearances } from '@/types/Appearance';

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  args: {
    img: { src: 'https://thispersondoesnotexist.com/' },
  },
  argTypes: {
    img: { if: { arg: 'appearance', eq: 'image' } },
    initials: { if: { arg: 'appearance', neq: 'image' } },
    emphasis: { if: { arg: 'appearance', neq: 'image' } },
  },
  parameters: {
    controls: { sort: 'alpha' },
    docs: {
      description: {
        component:
          "A visual representation of a user's identity, often displayed as a small image or icon. Avatars can be personalized with user-uploaded photos or auto-generated images and are commonly used in profile sections, comments, and messaging interfaces.",
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/avatar">
          <AvatarDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initials: Story = {
  argTypes: {
    appearance: appearances,
  },
  args: {
    initials: 'M',
    appearance: 'cyan',
  },
};

export const Image: Story = {
  args: {
    appearance: 'image',
  },
};
