import { vi } from 'vitest';

import { TextInput } from './TextInput';
import { fireEvent, render } from '../../tests/render';

const handleEventMock = vi.fn();

const getTextInput = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('text-input');
};

describe('TextInput', () => {
  it('should render the text input', () => {
    const textInput = getTextInput(<TextInput />);
    expect(textInput).toBeInTheDocument();
  });

  it('should emit onChange', () => {
    const textInput = getTextInput(<TextInput onChange={handleEventMock} />);

    const input = textInput.querySelector('input');
    if (input) {
      fireEvent.change(input, { target: { value: '2020-05-24' } });
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onBlur', () => {
    const textInput = getTextInput(<TextInput onBlur={handleEventMock} />);

    const input = textInput.querySelector('input');
    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const textInput = getTextInput(<TextInput onBlur={handleEventMock} />);

    const input = textInput.querySelector('input');
    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render beforeComponent', () => {
    const textInput = getTextInput(
      <TextInput
        beforeComponent={{ type: 'Icon', props: { name: '16-bolt' } }}
      />
    );

    const beforeComponent = textInput.querySelector('span');

    expect(beforeComponent).toBeInTheDocument();
  });

  it('should render afterComponent', () => {
    const textInput = getTextInput(
      <TextInput
        afterComponent={{ type: 'Icon', props: { name: '16-bolt' } }}
      />
    );

    const afterComponent = textInput.querySelector('span');

    expect(afterComponent).toBeInTheDocument();
  });

  it('should propagate custom props', () => {
    const textInput = getTextInput(
      <TextInput custom={{ backgroundColor: 'background-negative-subtle' }} />
    );

    expect(textInput).toHaveStyle('background-color: rgb(254, 245, 245)');
  });
});
