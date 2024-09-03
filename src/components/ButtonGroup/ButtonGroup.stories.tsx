import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

import { ButtonGroupDocs } from '@/docs-components/ButtonGroupDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      defaultValue: 'medium',
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A set of related buttons that are visually and functionally grouped. Button Group acts as a cohesive unit, providing users with clear options for actions or navigation.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/buttongroup">
          <ButtonGroupDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Button label="button" />,
      <Button label="button" />,
      <Button label="button" />,
      <Button label="button" />,
    ],
  },
};
