import { vi } from 'vitest';

import { SearchInput } from './SearchInput';
import { fireEvent, render } from '../../tests/render';

const handleEventMock = vi.fn();

const getSearchInput = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    textInput: getByTestId('text-input'),
    input: getByTestId('text-input-input') as HTMLInputElement,
    clearButton: queryByTestId('text-input-clear-button'),
    beforeComponent: queryByTestId('text-input-before-component'),
    afterComponent: queryByTestId('text-input-after-component'),
  };
};

describe('SearchInput', () => {
  beforeEach(() => {
    handleEventMock.mockClear();
  });

  it('should render the search input', () => {
    const { textInput } = getSearchInput(<SearchInput />);
    expect(textInput).toBeInTheDocument();
  });

  it('should emit onChange', () => {
    const { input } = getSearchInput(
      <SearchInput value="" onChange={handleEventMock} />,
    );

    if (input) {
      fireEvent.change(input, { target: { value: '2020-05-24' } });
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onBlur', () => {
    const { input } = getSearchInput(<SearchInput onBlur={handleEventMock} />);

    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const { input } = getSearchInput(<SearchInput onFocus={handleEventMock} />);

    if (input) {
      fireEvent.focus(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render beforeComponent', () => {
    const { beforeComponent } = getSearchInput(<SearchInput />);

    expect(beforeComponent).toBeInTheDocument();
  });

  it('should render afterComponent', () => {
    const { afterComponent } = getSearchInput(
      <SearchInput
        afterComponent={{ type: 'IconButton', props: { icon: '20-filter' } }}
      />,
    );

    expect(afterComponent).toBeInTheDocument();
  });

  it('should propagate custom props', () => {
    const { textInput } = getSearchInput(
      <SearchInput
        custom={{ backgroundColor: '$color-background-negative-subtle' }}
      />,
    );

    expect(textInput).toHaveStyle('background-color: rgb(254, 245, 245)');
  });

  it('should clear uncontrolled search input', () => {
    const { input, clearButton } = getSearchInput(<SearchInput />);

    if (input && clearButton) {
      fireEvent.change(input, { target: { value: 'test' } });

      expect(input.value).toBe('test');

      fireEvent.click(clearButton);

      expect(input.value).toBe('');
    }

    expect(input).toBeDefined();
  });

  it('should clear controlled text input', () => {
    const { input, clearButton } = getSearchInput(
      <SearchInput onChange={handleEventMock} />,
    );

    if (input && clearButton) {
      fireEvent.change(input, { target: { value: 'test' } });

      expect(input.value).toBe('test');

      fireEvent.click(clearButton);

      expect(handleEventMock).toBeCalledWith({ target: { value: '' } });
    }

    expect(input).toBeDefined();
  });

  it('should clear button not be visible', () => {
    const { clearButton } = getSearchInput(
      <SearchInput value="" onChange={handleEventMock} />,
    );

    expect(clearButton).not.toBeInTheDocument();
  });
});
