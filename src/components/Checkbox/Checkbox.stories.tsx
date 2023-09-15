import type { Meta, StoryObj } from '@storybook/react';
import { useLayoutEffect, useRef, useState } from 'react';

import { Checkbox } from './Checkbox';

import { tet } from '@/tetrisly';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
};

export const Indeterminate = () => {
  const [mainChecked, setMainChecked] = useState(false);
  const [checkbox1Value, setCheckbox1Value] = useState(false);
  const [checkbox2Value, setCheckbox2Value] = useState(true);

  const isInitialRender = useRef(true);

  useLayoutEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    setCheckbox1Value(mainChecked);
    setCheckbox2Value(mainChecked);
  }, [mainChecked]);

  return (
    <tet.div display="flex" flexDirection="column" gap="component-gap-small">
      <Checkbox
        isIndeterminate={!mainChecked && (checkbox1Value || checkbox2Value)}
        isChecked={mainChecked}
        onChange={(e) => setMainChecked(e.target.checked)}
      />
      <Checkbox
        isChecked={checkbox1Value}
        onChange={(e) => setCheckbox1Value(e.target.checked)}
      />
      <Checkbox
        isChecked={checkbox2Value}
        onChange={(e) => setCheckbox2Value(e.target.checked)}
      />
    </tet.div>
  );
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    label: 'Disabled',
  },
};

export const Alert: Story = {
  args: {
    state: 'alert',
    label: 'Label',
    helperText: 'Helper text',
  },
};

export const Label: Story = {
  args: {
    label: 'Label',
  },
};

export const HelperText: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper text',
  },
};
