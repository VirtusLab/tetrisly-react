import { Meta, StoryObj } from '@storybook/react';

import { SocialButton } from './SocialButton';

import { IconButtonDocs } from '@/docs-components/IconButtonDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'SocialButton',
  component: SocialButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Social Button triggers an event or action connected with the social media platforms.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/iconbutton">
          <IconButtonDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryApple: Story = {
  args: {
    platform: 'Apple',
    label: 'Sign in with Apple',
  },
};

export const SecondaryApple: Story = {
  args: {
    platform: 'Apple',
    appearance: 'secondary',
    label: 'Sign in with Apple',
  },
};

export const PrimaryFacebook: Story = {
  args: {
    platform: 'Facebook',
    label: 'Sign in with Facebook',
  },
};

export const SecondaryFacebook: Story = {
  args: {
    platform: 'Facebook',
    appearance: 'secondary',
    label: 'Sign in with Facebook',
  },
};

export const PrimaryFigma: Story = {
  args: {
    platform: 'Figma',
    label: 'Sign in with Figma',
  },
};

export const SecondaryFigma: Story = {
  args: {
    platform: 'Figma',
    appearance: 'secondary',
    label: 'Sign in with Figma',
  },
};

export const PrimaryGithub: Story = {
  args: {
    platform: 'Github',
    label: 'Sign in with Github',
  },
};

export const SecondaryGithub: Story = {
  args: {
    platform: 'Github',
    appearance: 'secondary',
    label: 'Sign in with Github',
  },
};

export const PrimaryGoogle: Story = {
  args: {
    platform: 'Google',
    label: 'Sign in with Google',
  },
};

export const SecondaryGoogle: Story = {
  args: {
    platform: 'Google',
    appearance: 'secondary',
    label: 'Sign in with Google',
  },
};

export const PrimaryTwitter: Story = {
  args: {
    platform: 'X',
    label: 'Sign in with Twitter',
  },
};

export const SecondaryTwitter: Story = {
  args: {
    platform: 'X',
    appearance: 'secondary',
    label: 'Sign in with Twitter',
  },
};
