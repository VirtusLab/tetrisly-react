import { StatusDot } from './StatusDot';
import { render } from '../../tests/render';

import { silentThrowExpect } from '@/tests/silentThrowExpect';

const getStatusDot = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('status-dot');
};

describe('StatusDot', () => {
  it('should render the status dot', () => {
    const statusDot = getStatusDot(<StatusDot appearance="red" />);
    expect(statusDot).toBeInTheDocument();
  });

  it('should render correct color (green)', () => {
    const statusDotGreen = getStatusDot(<StatusDot appearance="green" />);
    expect(statusDotGreen).toHaveStyle('background-color: rgb(29, 29, 29)');
  });

  it('should render correct color (red)', () => {
    const statusDotRed = getStatusDot(<StatusDot appearance="red" />);
    expect(statusDotRed).toHaveStyle('background-color: rgb(197, 52, 52)');
  });

  it('should render correct color (orange)', () => {
    const statusDotOrange = getStatusDot(<StatusDot appearance="orange" />);
    expect(statusDotOrange).toHaveStyle('background-color: rgb(56, 56, 56)');
  });

  it('should render border', () => {
    const statusDotStroked = getStatusDot(
      <StatusDot appearance="green" stroked />,
    );
    expect(statusDotStroked).toHaveStyle(
      'box-shadow: var(--x-ring-shadow,0 0 #0000),var(--x-shadow,0 0 #0000);',
    );
  });

  it('should throw an error if wrong config is provided', () => {
    silentThrowExpect(() =>
      // @ts-expect-error testing wrong appearance
      render(<StatusDot appearance="reverseInverted" />),
    ).toThrowError();
  });
});
