import { Dimmer } from './Dimmer';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getDimmer = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('dimmer');
};

describe('Dimmer', () => {
  it('should render the dimmer', () => {
    const dimmer = getDimmer(<Dimmer />);
    expect(dimmer).toBeInTheDocument();
  });

  it('should render correct color', () => {
    const dimmer = getDimmer(<Dimmer />);
    expect(dimmer).toHaveStyle('background-color: rgba(25, 39, 58, 0.741)');
  });

  customPropTester(<Dimmer />, {
    containerId: 'dimmer',
  });
});
