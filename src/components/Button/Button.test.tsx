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

  it('should render Default button when no props are provided (except label) ', () => {
    // TODO(add tests)
    expect(true).toBe(true);
  });
});
