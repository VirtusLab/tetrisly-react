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
      // @ts-expect-error testing wrong config
      render(<Button variant="Default" appearance="reverseInverted" />)
    ).toThrowError();
  });

  it('should render Default button when only label is provided', () => {
    // TODO(add tests)
    expect(true).toBe(true);
  });
});
