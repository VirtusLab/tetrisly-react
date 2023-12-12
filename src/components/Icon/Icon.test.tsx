import { Icon } from './Icon';
import { render } from '../../tests/render';

const getIcon = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);

  return getByTestId('icon');
};

describe('Loader', () => {
  it('should render the component', () => {
    const icon = getIcon(<Icon name="20-tetrisly" />);

    expect(icon).toBeInTheDocument();
  });

  it('should render star with $color-raspberry-0 color', () => {
    const icon = getIcon(<Icon name="20-star" color="$color-raspberry-0" />);

    expect(icon).toHaveStyle('color: rgb(192, 48, 96);');
  });
});
