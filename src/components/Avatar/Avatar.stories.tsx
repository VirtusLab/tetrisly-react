import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { avatarAppearances } from './AvatarAppearances';

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
  args: {
    img: {
      src: 'https://s3-alpha-sig.figma.com/img/cb99/66a9/febdebc9b4448067c48c4c3ec18e1b11?Expires=1690761600&Signature=DLwDbJ0lgvoDbeKHt39jxTn0PYgIE9n9fBw7GQiL4i90ZFkShisjffyiGFAQejpGiuR4Z7R1DxKEThE3JdeNW2XOn~a5Ebt73WGSAy122OpxUbD4QwMDpFv5kx4BYNRKAlm6JatDiwMzjKkK~1oURn0AlsXLKoj64M3hVpMBRlJ4VrGbyach4FVRPpqXhyJy0Xgb6htBEHw31ZLdcRHCsat~jqmEdDWxTScUaUiXo3jgQiAH9cipn5lZreJ2jwXKjaCLIUjqYTPWs1a8SHob4zyI5Yh9t5T9uU3Ou7oamEGmsu157cpLA3Ad9kp6Y5l3tRo9VnS3LG3J3NJUhxObWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    appearance: 'image',
  },
};

export const Plain: Story = {
  argTypes: {
    appearance: avatarAppearances,
  },
};
