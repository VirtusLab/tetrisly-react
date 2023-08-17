import { vi } from 'vitest';

import { RadioButton } from './RadioButton';
import { fireEvent, render } from '../../tests/render';

const handleEventMock = vi.fn();

const getRadioButton = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    radioButton: queryByTestId('radio-button'),
    label: queryByTestId('radio-button-label'),
    helperText: queryByTestId('helper-text'),
  };
};

describe('Radio button', () => {
  it('should render the radio button', () => {
    const { radioButton } = getRadioButton(<RadioButton />);
    expect(radioButton).toBeInTheDocument();
  });

  it('should emit onChange', () => {
    const { radioButton } = getRadioButton(
      <RadioButton onChange={handleEventMock} />
    );

    const input = radioButton?.querySelector('input');
    if (input) {
      fireEvent.click(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onBlur', () => {
    const { radioButton } = getRadioButton(
      <RadioButton onBlur={handleEventMock} />
    );

    const input = radioButton?.querySelector('input');
    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const { radioButton } = getRadioButton(
      <RadioButton onFocus={handleEventMock} />
    );

    const input = radioButton?.querySelector('input');
    if (input) {
      fireEvent.focus(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should have checked state', () => {
    const { radioButton } = getRadioButton(<RadioButton isChecked />);

    const input = radioButton?.querySelector('input');

    expect(input?.checked).toBeTruthy();

    if (input) {
      fireEvent.click(input);
    }

    expect(input?.checked).toBeTruthy();
  });

  it('should render label text', () => {
    const { label } = getRadioButton(<RadioButton label="Label" />);

    expect(label).toHaveTextContent('Label');
  });

  it('should render helper text if props provided', () => {
    const { label, helperText } = getRadioButton(
      <RadioButton label="Label" helperText="Helper text" />
    );

    expect(label).toHaveTextContent('Label');
    expect(helperText).toBeInTheDocument();
    expect(helperText).toHaveTextContent('Helper text');
  });

  it('should not render helper text if props not provided', () => {
    const { helperText } = getRadioButton(<RadioButton label="Label" />);

    expect(helperText).toBeNull();
  });

  it('should propagate custom props', () => {
    const { radioButton } = getRadioButton(
      <RadioButton custom={{ backgroundColor: 'background-negative-subtle' }} />
    );

    expect(radioButton).toHaveStyle('background-color: rgb(254, 245, 245)');
  });
});
