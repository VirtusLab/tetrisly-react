import { Button } from './Button';
import { render } from '../../tests/render';

const getButton = (jsx: JSX.Element) => {
  const { getByRole } = render(jsx);
  return getByRole('button');
};

describe('Button', () => {
  it('should render the button', () => {
    const button = getButton(<Button label="Hello there" />);
    expect(button).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const button = getButton(<Button label="Hello there" />);
    expect(button).toHaveTextContent('Hello there');
  });

  it('should throw an error if wrong config is provided', () => {
    expect(() =>
      // @ts-expect-error testing wrong appearance
      render(<Button variant="default" appearance="reverseInverted" />)
    ).toThrowError();
    expect(() =>
      // @ts-expect-error testing wrong dropdown
      render(<Button label="Hello There" afterIcon="20-placeholder" dropdown />)
    ).toThrowError();
  });

  it('should render default button when only label is provided', () => {
    // TODO(add tests)
    expect(true).toBe(true);
  });
});
