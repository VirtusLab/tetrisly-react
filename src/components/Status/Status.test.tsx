import { Status } from './Status';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getStatus = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return {
    status: getByTestId('status'),
    dot: getByTestId('status-dot'),
  };
};

describe('Status', () => {
  it('should render the status', () => {
    const { status } = getStatus(<Status />);
    expect(status).toBeInTheDocument();
  });

  it('should render a correct color (grey, high)', () => {
    const { status, dot } = getStatus(
      <Status appearance="grey" emphasis="high" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgb(85, 95, 109); color: rgb(255, 255, 255)',
    );
    expect(dot).toHaveStyle('background-color: rgb(255, 255, 255)');
  });

  it('should render a correct color (grey, medium)', () => {
    const { status, dot } = getStatus(
      <Status appearance="grey" emphasis="medium" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgb(222, 227, 231); color: rgb(39, 46, 53)',
    );
    expect(dot).toHaveStyle('background-color: rgb(85, 95, 109)');
  });

  it('should render a correct color (grey, low)', () => {
    const { status, dot } = getStatus(
      <Status appearance="grey" emphasis="low" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgba(255, 255, 255, 0); color: rgb(39, 46, 53)',
    );
    expect(dot).toHaveStyle('background-color: rgb(85, 95, 109)');
  });

  it('should render a correct color (blue, high)', () => {
    const { status, dot } = getStatus(
      <Status appearance="blue" emphasis="high" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgb(48, 98, 212); color: rgb(255, 255, 255)',
    );
    expect(dot).toHaveStyle('background-color: rgb(255, 255, 255)');
  });

  it('should render a correct color (green, high)', () => {
    const { status, dot } = getStatus(
      <Status appearance="green" emphasis="high" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgb(29, 124, 77); color: rgb(255, 255, 255)',
    );
    expect(dot).toHaveStyle('background-color: rgb(255, 255, 255)');
  });

  it('should render a correct color (red, high)', () => {
    const { status, dot } = getStatus(
      <Status appearance="red" emphasis="high" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgb(197, 52, 52); color: rgb(255, 255, 255)',
    );
    expect(dot).toHaveStyle('background-color: rgb(255, 255, 255)');
  });

  it('should render a correct color (orange, high)', () => {
    const { status, dot } = getStatus(
      <Status appearance="orange" emphasis="high" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgb(245, 150, 56); color: rgb(39, 46, 53)',
    );
    expect(dot).toHaveStyle('background-color: rgb(39, 46, 53)');
  });

  it('should render a correct color (orange, medium)', () => {
    const { status, dot } = getStatus(
      <Status appearance="orange" emphasis="medium" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgb(252, 222, 192); color: rgb(122, 69, 16)',
    );
    expect(dot).toHaveStyle('background-color: rgb(245, 150, 56)');
  });

  it('should render a correct color (orange, low)', () => {
    const { status, dot } = getStatus(
      <Status appearance="orange" emphasis="low" />,
    );
    expect(status).toHaveStyle(
      'background-color: rgba(255, 255, 255, 0); color: rgb(122, 69, 16)',
    );
    expect(dot).toHaveStyle('background-color: rgb(245, 150, 56)');
  });

  customPropTester(<Status />, {
    containerId: 'status',
    props: {
      appearance: ['grey', 'blue', 'green', 'red', 'orange'],
      emphasis: ['high', 'medium', 'low'],
    },
  });
});
