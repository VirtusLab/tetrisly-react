import { Meta, StoryObj } from '@storybook/react';

import { SocialButton } from './SocialButton';

import { IconButtonDocs } from '@/docs-components/IconButtonDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Components/SocialButton',
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
  },
};

export const SecondaryApple: Story = {
  args: {
    platform: 'Apple',
    appearance: 'secondary',
  },
};

export const PrimaryFacebook: Story = {
  args: {
    platform: 'Facebook',
  },
};

export const SecondaryFacebook: Story = {
  args: {
    platform: 'Facebook',
    appearance: 'secondary',
  },
};

export const PrimaryFigma: Story = {
  args: {
    platform: 'Figma',
  },
};

export const SecondaryFigma: Story = {
  args: {
    platform: 'Figma',
    appearance: 'secondary',
  },
};

export const PrimaryGithub: Story = {
  args: {
    platform: 'Github',
  },
};

export const SecondaryGithub: Story = {
  args: {
    platform: 'Github',
    appearance: 'secondary',
  },
};

export const PrimaryGoogle: Story = {
  args: {
    platform: 'Google',
  },
};

export const SecondaryGoogle: Story = {
  args: {
    platform: 'Google',
    appearance: 'secondary',
  },
};

export const PrimaryTwitter: Story = {
  args: {
    platform: 'X',
  },
};

export const SecondaryTwitter: Story = {
  args: {
    platform: 'X',
    appearance: 'secondary',
  },
};
