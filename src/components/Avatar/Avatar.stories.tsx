import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { avatarAppearances } from './AvatarAppearances';

import { tet } from '@/tetrisly';

const meta = {
  component: Avatar,
  decorators: [
    (Story) => (
      <tet.div
        display="flex"
        justifyContent="center"
        p="component-padding-large"
      >
        <Story />
      </tet.div>
    ),
  ],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
  args: {
    img: {
      src: 'https://thispersondoesnotexist.com/',
    },
    appearance: 'image',
  },
};

export const Plain: Story = {
  argTypes: {
    appearance: avatarAppearances,
  },
  args: {
    initials: 'M',
  },
};
