import { vi } from 'vitest';

import { Checkbox } from './Checkbox';
import { fireEvent, render } from '../../tests/render';

const handleEventMock = vi.fn();

const getCheckbox = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    checkbox: queryByTestId('checkbox'),
    label: queryByTestId('checkbox-label'),
    helperText: queryByTestId('helper-text'),
  };
};

describe('Checkbox', () => {
  it('should render the checkbox', () => {
    const { checkbox } = getCheckbox(<Checkbox />);
    expect(checkbox).toBeInTheDocument();
  });

  it('should emit onChange', () => {
    const { checkbox } = getCheckbox(<Checkbox onChange={handleEventMock} />);

    const input = checkbox?.querySelector('input');
    if (input) {
      fireEvent.click(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onBlur', () => {
    const { checkbox } = getCheckbox(<Checkbox onBlur={handleEventMock} />);

    const input = checkbox?.querySelector('input');
    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const { checkbox } = getCheckbox(<Checkbox onFocus={handleEventMock} />);

    const input = checkbox?.querySelector('input');
    if (input) {
      fireEvent.focus(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should have indeterminate state', () => {
    const { checkbox } = getCheckbox(<Checkbox isIndeterminate />);

    const input = checkbox?.querySelector('input');

    expect(input?.indeterminate).toBeTruthy();

    if (input) {
      fireEvent.click(input);
    }

    expect(input?.indeterminate).toBeFalsy();
  });

  it('should have checked state', () => {
    const { checkbox } = getCheckbox(<Checkbox isChecked />);

    const input = checkbox?.querySelector('input');

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
      <Checkbox custom={{ backgroundColor: 'background-negative-subtle' }} />,
    );

    expect(checkbox).toHaveStyle('background-color: rgb(254, 245, 245)');
  });
});
