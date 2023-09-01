import { vi } from 'vitest';

import { InlineSearchInput } from './InlineSearchInput';
import { fireEvent, render } from '../../tests/render';

const handleEventMock = vi.fn();

const getInlineSearchInput = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    textInput: getByTestId('text-input'),
    input: getByTestId('text-input-input') as HTMLInputElement,
    clearButton: queryByTestId('text-input-clear-button'),
    beforeComponent: queryByTestId('text-input-before-component'),
  };
};

describe('InlineSearchInput', () => {
  beforeEach(() => {
    handleEventMock.mockClear();
  });

  it('should render the search input', () => {
    const { textInput } = getInlineSearchInput(<InlineSearchInput />);
    expect(textInput).toBeInTheDocument();
  });

  it('should emit onChange', () => {
    const { input } = getInlineSearchInput(
      <InlineSearchInput value="" onChange={handleEventMock} />,
    );

    if (input) {
      fireEvent.change(input, { target: { value: '2020-05-24' } });
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onBlur', () => {
    const { input } = getInlineSearchInput(
      <InlineSearchInput onBlur={handleEventMock} />,
    );

    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const { input } = getInlineSearchInput(
      <InlineSearchInput onFocus={handleEventMock} />,
    );

    if (input) {
      fireEvent.focus(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render beforeComponent', () => {
    const { beforeComponent } = getInlineSearchInput(<InlineSearchInput />);

    expect(beforeComponent).toBeInTheDocument();
  });

  it('should propagate custom props', () => {
    const { textInput } = getInlineSearchInput(
      <InlineSearchInput
        custom={{ backgroundColor: 'background-negative-subtle' }}
      />,
    );

    expect(textInput).toHaveStyle('background-color: rgb(254, 245, 245)');
  });

  it('should clear uncontrolled search input', () => {
    const { input, clearButton } = getInlineSearchInput(<InlineSearchInput />);

    if (input && clearButton) {
      fireEvent.change(input, { target: { value: 'test' } });

      expect(input.value).toBe('test');

      fireEvent.click(clearButton);

      expect(input.value).toBe('');
    }

    expect(input).toBeDefined();
  });

  it('should clear controlled text input', () => {
    const { input, clearButton } = getInlineSearchInput(
      <InlineSearchInput value="1234" onChange={handleEventMock} />,
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
    const { clearButton } = getInlineSearchInput(
      <InlineSearchInput value="" onChange={handleEventMock} />,
    );

    expect(clearButton).not.toBeInTheDocument();
  });
});
