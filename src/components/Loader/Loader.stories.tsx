import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Loader } from './Loader';

const meta = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCircle: Story = {
  args: {
    shape: 'circle',
  },
};

export const DefaultBar: Story = {
  args: {
    shape: 'bar',
  },
};

export const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress((p) => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="circle" progress={progress} />;
};

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setProgress((p) => (p + 0.01) % 1), 50);
    return () => clearInterval(interval);
  }, []);
  return <Loader shape="bar" progress={progress} />;
};

export const White: Story = {
  args: {
    shape: 'circle',
    appearance: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Inverted: Story = {
  args: {
    shape: 'bar',
    appearance: 'inverted',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Greyscale: Story = {
  args: {
    shape: 'circle',
    appearance: 'greyscale',
  },
};
