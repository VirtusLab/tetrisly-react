import type { Meta, StoryObj } from '@storybook/react';
import { useLayoutEffect, useRef, useState } from 'react';

import { Toggle } from './Toggle';

import { TetDocs } from '@/docs-components/TetDocs';
import { ToggleDocs } from '@/docs-components/ToggleDocs.tsx';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: {
        type: 'select',
        options: [undefined, 'disabled'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A visual representation of the switch that allows the user to choose between two states, such as on and off or enable and disable. Toggles are often used in forms or settings to represent binary options and provide clear visual feedback of the active state.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/toggle">
          <ToggleDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {};
export const Checked: Story = {
  args: {
    isChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

export const Indeterminate = () => {
  const [mainChecked, setMainChecked] = useState(false);
  const [toggle1Value, setToggle1Value] = useState(true);
  const [toggle2Value, setToggle2Value] = useState(false);
  const isInitialRender = useRef(true);

  useLayoutEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    setToggle1Value(mainChecked);
    setToggle2Value(mainChecked);
  }, [mainChecked]);

  return (
    <tet.div
      display="flex"
      flexDirection="column"
      gap="$space-component-gap-small"
    >
      <Toggle
        size="large"
        isIndeterminate={toggle1Value || toggle2Value}
        isChecked={mainChecked || (toggle1Value && toggle2Value)}
        onChange={() => setMainChecked(!mainChecked)}
      />
      <Toggle
        isChecked={toggle1Value}
        onChange={() => setToggle1Value(!toggle1Value)}
      />
      <Toggle
        isChecked={toggle2Value}
        onChange={() => setToggle2Value(!toggle2Value)}
      />
    </tet.div>
  );
};

export const Label: Story = {
  args: {
    label: 'Label',
  },
};

export const HelperText: Story = {
  args: {
    label: 'Label',
    helperText: { text: 'Helper text' },
  },
};
