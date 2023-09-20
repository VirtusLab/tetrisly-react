import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Loader } from './Loader';

import { LoaderDocs } from '@/docs-components/LoaderDocs';
import { TetDocs } from '@/docs-components/TetDocs';

const meta = {
  title: 'Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A distinctive text input field that allows users to search for content on a website or application, by entering keywords, phrases, or other search terms. Search Inputs often include a search icon and may provide autocomplete suggestions or filters to refine results.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/in-progress/loader">
          <LoaderDocs />
        </TetDocs>
      ),
    },
  },
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
