import { vi } from 'vitest';

import { TextInput } from './TextInput';
import { fireEvent, render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const handleEventMock = vi.fn();

const getTextInput = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    textInput: getByTestId('text-input'),
    input: getByTestId('text-input-input') as HTMLInputElement,
    clearButton: queryByTestId('text-input-clear-button'),
  };
};

describe('TextInput', () => {
  beforeEach(() => {
    handleEventMock.mockClear();
  });

  customPropTester(<TextInput />, {
    containerId: 'text-input',
  });

  it('should render the text input', () => {
    const { textInput } = getTextInput(<TextInput />);
    expect(textInput).toBeInTheDocument();
  });

  it('should emit onChange and not change value', () => {
    const { input } = getTextInput(
      <TextInput value="Value" onChange={handleEventMock} />,
    );

    if (input) {
      fireEvent.change(input, { target: { value: '2020-05-24' } });
    }

    expect(handleEventMock).toHaveBeenCalled();
    expect(input.value).toBe('Value');
  });

  it('should emit onChange and change value', () => {
    const { input } = getTextInput(<TextInput onChange={handleEventMock} />);

    if (input) {
      fireEvent.change(input, { target: { value: 'Value' } });
    }

    expect(handleEventMock).toHaveBeenCalled();
    expect(input.value).toBe('Value');
  });

  it('should emit onBlur', () => {
    const { input } = getTextInput(<TextInput onBlur={handleEventMock} />);

    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const { input } = getTextInput(<TextInput onFocus={handleEventMock} />);

    if (input) {
      fireEvent.focus(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render beforeComponent', () => {
    const { textInput } = getTextInput(
      <TextInput
        beforeComponent={{ type: 'Icon', props: { name: '16-bolt' } }}
      />,
    );

    const beforeComponent = textInput.querySelector('span');

    expect(beforeComponent).toBeInTheDocument();
  });

  it('should render afterComponent', () => {
    const { textInput } = getTextInput(
      <TextInput
        afterComponent={{ type: 'Icon', props: { name: '16-bolt' } }}
      />,
    );

    const afterComponent = textInput.querySelector('span');

    expect(afterComponent).toBeInTheDocument();
  });

  it('should propagate custom props', () => {
    const { textInput } = getTextInput(
      <TextInput custom={{ backgroundColor: 'background-negative-subtle' }} />,
    );

    expect(textInput).toHaveStyle('background-color: rgb(254, 245, 245)');
  });

  it('should clear uncontrolled text input', () => {
    const { input, clearButton } = getTextInput(<TextInput hasClearButton />);

    if (input && clearButton) {
      fireEvent.change(input, { target: { value: 'test' } });

      expect(input.value).toBe('test');

      fireEvent.click(clearButton);

      expect(input.value).toBe('');
    }

    expect(input).toBeDefined();
  });

  it('should clear controlled text input', () => {
    const { input, clearButton } = getTextInput(
      <TextInput value="1234" onChange={handleEventMock} hasClearButton />,
    );

    if (input && clearButton) {
      fireEvent.change(input, { target: { value: 'test' } });

      expect(input.value).toBe('1234');

      fireEvent.click(clearButton);

      expect(handleEventMock).toBeCalledWith({ target: { value: '' } });
    }

    expect(input).toBeDefined();
  });

  it('should clear button not be visible', () => {
    const { clearButton } = getTextInput(
      <TextInput value="" onChange={handleEventMock} hasClearButton />,
    );

    expect(clearButton).not.toBeInTheDocument();
  });
});
