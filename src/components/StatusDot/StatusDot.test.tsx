import { StatusDot } from './StatusDot';
import { render } from '../../tests/render';

const getStatusDot = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('status-dot');
};

describe('StatusDot', () => {
  it('should render the status dot', () => {
    const statusDot = getStatusDot(<StatusDot appearance="red" />);
    expect(statusDot).toBeInTheDocument();
  });

  it('should render correct color', () => {
    const statusDot = getStatusDot(<StatusDot appearance="green" />);
    expect(statusDot).toHaveStyle('background-color: rgb(29, 29, 29)');
  });

  it('should throw an error if wrong config is provided', () => {
    expect(() =>
      // @ts-expect-error testing wrong appearance
      render(<StatusDot appearance="reverseInverted" />)
    ).toThrowError();
  });
});
