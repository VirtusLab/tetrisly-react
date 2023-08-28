import { Meta, StoryObj } from '@storybook/react';

import { SocialButton } from './SocialButton';

const meta = {
  title: 'Components/SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCircle: Story = {
  args: {
    platform: 'Apple',
  },
};
