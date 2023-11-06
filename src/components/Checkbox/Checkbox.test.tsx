import { vi } from 'vitest';

import { Checkbox } from './Checkbox';
import { fireEvent, render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const handleEventMock = vi.fn();

const getCheckbox = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    checkbox: getByTestId('checkbox'),
    label: queryByTestId('checkbox-label'),
    helperText: queryByTestId('checkbox-helperText'),
    input: getByTestId('checkbox-input') as HTMLInputElement,
  };
};

describe('Checkbox', () => {
  customPropTester(<Checkbox label="Label" helperText="Helper Text" />, {
    containerId: 'checkbox',
    innerElements: {
      input: [],
      checkboxContainer: [],
      checkboxIcon: [],
      label: [],
      helperText: [],
    },
  });

  beforeEach(() => {
    handleEventMock.mockReset();
  });

  it('should render the checkbox', () => {
    const { checkbox } = getCheckbox(<Checkbox />);
    expect(checkbox).toBeInTheDocument();
  });

  it('should emit onChange', () => {
    const { input } = getCheckbox(<Checkbox onChange={handleEventMock} />);

    if (input) {
      fireEvent.click(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onBlur', () => {
    const { input } = getCheckbox(<Checkbox onBlur={handleEventMock} />);

    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const { input } = getCheckbox(<Checkbox onFocus={handleEventMock} />);

    if (input) {
      fireEvent.focus(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should have indeterminate state', () => {
    const { input } = getCheckbox(<Checkbox isIndeterminate />);

    expect(input.indeterminate).toBeTruthy();

    if (input) {
      fireEvent.click(input);
    }

    expect(input?.indeterminate).toBeFalsy();
  });

  it('should have checked state', () => {
    const { input } = getCheckbox(<Checkbox isChecked readOnly />);

    expect(input?.checked).toBeTruthy();

    if (input) {
      fireEvent.click(input);
    }

    expect(input?.checked).toBeTruthy();
  });

  it('should render label text', () => {
    const { label } = getCheckbox(<Checkbox label="Label" />);

    expect(label).toHaveTextContent('Label');
  });

  it('should render helper text if props provided', () => {
    const { label, helperText } = getCheckbox(
      <Checkbox label="Label" helperText="Helper text" />,
    );

    expect(label).toHaveTextContent('Label');
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent('Helper text');
  });

  it('should not render helper text if props not provided', () => {
    const { helperText } = getCheckbox(<Checkbox label="Label" />);

    expect(helperText).toBeNull();
  });

  it('should propagate custom props', () => {
    const { checkbox } = getCheckbox(
      <Checkbox
        custom={{ backgroundColor: '$color-background-negative-subtle' }}
      />,
    );

    expect(checkbox).toHaveStyle('background-color: rgb(254, 245, 245)');
  });

  it('should emit onChange and not change value', () => {
    const { input } = getCheckbox(
      <Checkbox isChecked onChange={handleEventMock} />,
    );

    if (input) {
      fireEvent.click(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
    expect(input.checked).toBe(true);
  });

  it('should emit onChange and change value', () => {
    const { input } = getCheckbox(<Checkbox onChange={handleEventMock} />);

    if (input) {
      fireEvent.click(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
    expect(input.checked).toBe(true);
  });
});
