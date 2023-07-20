import type { Meta, StoryObj } from '@storybook/react';

import { StatusDot } from './StatusDot';
import { tet } from '../../tetrisly/tetrisly';

const meta = {
  title: 'Components/Status Dot',
  component: StatusDot,
  tags: ['autodocs'],
  args: {
    appearance: 'red',
    stroked: false,
  },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Stroked: Story = {
  args: {
    appearance: 'green',
    stroked: true,
  },
  render: () => (
    <tet.div backgroundColor="coolGrey--4" padding="component-padding-large">
      <StatusDot appearance="green" stroked />
    </tet.div>
  ),
};
