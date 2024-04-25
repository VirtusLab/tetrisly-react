import { vi } from 'vitest';

import { fireEvent, render } from '../../tests/render';

import { Toggle } from '@/components/Toggle/Toggle.tsx';
import { customPropTester } from '@/tests/customPropTester';

const handleEventMock = vi.fn();

const getToggle = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    toggle: getByTestId('toggle'),
    toggleOval: getByTestId('toggle-oval'),
    label: queryByTestId('toggle-label'),
    labelContainer: getByTestId('toggle-label-container'),
  };
};

describe('Toggle', () => {
  customPropTester(<Toggle />, {
    containerId: 'toggle',
  });

  beforeEach(() => {
    handleEventMock.mockReset();
  });

  it('should render the toggle', () => {
    const { toggle } = getToggle(<Toggle />);
    expect(toggle).toBeInTheDocument();
  });

  it('should render the correct label', () => {
    const { label } = getToggle(<Toggle label="label" />);
    expect(label).toHaveTextContent('label');
  });

  it('should render the correct helper text', () => {
    const { toggle } = getToggle(
      <Toggle label="label" helperText={{ text: 'helper text' }} />,
    );
    expect(toggle).toHaveTextContent('helper text');
  });

  it('should emit onChange', () => {
    const { labelContainer } = getToggle(<Toggle onChange={handleEventMock} />);
    fireEvent.click(labelContainer);
    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should not emit onChange when disable', () => {
    const { labelContainer } = getToggle(
      <Toggle onChange={handleEventMock} state="disabled" />,
    );
    fireEvent.click(labelContainer);
    expect(handleEventMock).not.toHaveBeenCalled();
  });

  it('should render the correct color when unchecked and disabled', () => {
    const { toggleOval } = getToggle(<Toggle state="disabled" />);
    expect(toggleOval).toHaveStyle('background-color: rgba(158, 168, 179, 1);');
  });

  it('should render the correct color when checked and disabled', () => {
    const { toggleOval } = getToggle(<Toggle isChecked state="disabled" />);
    expect(toggleOval).toHaveStyle('background-color: rgba(48, 98, 212, 1);');
  });

  it('should render the right cursor on disabled toggleOval', () => {
    const { toggleOval } = getToggle(<Toggle state="disabled" />);
    expect(toggleOval).toHaveStyle('cursor: default');
  });

  it('should render the right cursor on disabled label', () => {
    const { label } = getToggle(<Toggle state="disabled" label="label" />);
    expect(label).toHaveStyle('cursor: default');
  });

  it('should propagate custom props', () => {
    const { toggleOval } = getToggle(
      <Toggle
        custom={{
          innerElements: {
            toggle: {
              toggleOval: {
                backgroundColor: '$color-background-negative-subtle',
              },
            },
          },
        }}
      />,
    );
    expect(toggleOval).toHaveStyle('background-color: rgb(254, 245, 245)');
  });

  it('should render small size toggle', () => {
    const { toggleOval } = getToggle(<Toggle size="small" />);
    expect(toggleOval).toHaveStyle('width: 28px');
  });

  it('should render large size toggle', () => {
    const { toggleOval } = getToggle(<Toggle size="large" />);
    expect(toggleOval).toHaveStyle('width: 36px');
  });
});
