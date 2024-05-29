import { vi } from 'vitest';

import { TagInput } from './TagInput';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const handleEventMock = vi.fn();

const getTagInput = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);

  return {
    tagInput: getByTestId('tag-input'),
    input: getByTestId('tag-input-input'),
    inputContainer: getByTestId('tag-input-input-container'),
  };
};

describe('TagInput', () => {
  beforeEach(() => {
    handleEventMock.mockClear();
  });

  customPropTester(<TagInput />, {
    containerId: 'tag-input',
  });

  it('should render the tag input', () => {
    const { tagInput } = getTagInput(<TagInput />);
    expect(tagInput).toBeInTheDocument();
  });

  it('should propagate custom props', () => {
    const { tagInput } = getTagInput(
      <TagInput
        custom={{ backgroundColor: '$color-background-negative-subtle' }}
      />,
    );

    expect(tagInput).toHaveStyle('background-color: rgb(254, 245, 245)');
  });

  it('should render correct colors for validation error', () => {
    const { inputContainer } = getTagInput(<TagInput isValidationError />);
    expect(inputContainer).toHaveStyle('--x-ring-color: #f26464');
  });
});
