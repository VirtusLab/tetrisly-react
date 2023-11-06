import { vi } from 'vitest';

import { Select } from './Select';
import { fireEvent, render } from '../../tests/render';

const handleEventMock = vi.fn();

const getSelect = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);

  return {
    textInput: getByTestId('text-input'),
    input: getByTestId('text-input-input') as HTMLInputElement,
    beforeComponent: queryByTestId('text-input-before-component'),
  };
};

describe('Select', () => {
  beforeEach(() => {
    handleEventMock.mockClear();
  });

  it('should render the select', () => {
    const { textInput } = getSelect(<Select />);
    expect(textInput).toBeInTheDocument();
  });

  it('should emit onChange', () => {
    const { input } = getSelect(<Select value="" onChange={handleEventMock} />);

    if (input) {
      fireEvent.change(input, { target: { value: '2020-05-24' } });
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onBlur', () => {
    const { input } = getSelect(<Select onBlur={handleEventMock} />);

    if (input) {
      fireEvent.blur(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should emit onFocus', () => {
    const { input } = getSelect(<Select onFocus={handleEventMock} />);

    if (input) {
      fireEvent.focus(input);
    }

    expect(handleEventMock).toHaveBeenCalled();
  });

  it('should render beforeComponent', () => {
    const { beforeComponent } = getSelect(
      <Select beforeComponent={{ type: 'Icon', props: { name: '20-bolt' } }} />,
    );

    expect(beforeComponent).toBeInTheDocument();
  });

  it('should propagate custom prop to text input', () => {
    const { textInput } = getSelect(
      <Select
        custom={{ backgroundColor: '$color-background-negative-subtle' }}
      />,
    );

    expect(textInput).toHaveStyle('background-color: rgb(254, 245, 245)');
  });
});
