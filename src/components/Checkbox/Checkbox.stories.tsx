import type { Meta, StoryObj } from '@storybook/react';
import { useLayoutEffect, useRef, useState } from 'react';

import { Checkbox } from './Checkbox';

import { CheckboxDocs } from '@/docs-components/CheckboxDocs';
import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: {
        type: 'select',
        options: [undefined, 'disabled', 'alert'],
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component that allows users to select one or multiple options from a set. Checkboxes present a clear visual indication of the selected state, making them ideal for forms and settings.',
      },
      page: () => (
        <TetDocs docs="https://docs.tetrisly.com/components/list/checkbox">
          <CheckboxDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    isChecked: true,
    onChange: () => {},
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
    <tet.div
      display="flex"
      flexDirection="column"
      gap="$space-component-gap-small"
    >
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
    helperText: { text: 'Helper text' },
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
    helperText: { text: 'Helper text' },
  },
};
