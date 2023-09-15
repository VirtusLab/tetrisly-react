import { Divider } from './Divider';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getDivider = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('divider');
};

describe('Divider', () => {
  it('should render the divider', () => {
    const divider = getDivider(<Divider />);
    expect(divider).toBeInTheDocument();
  });

  it('should render the horizontal divider if no props passed', () => {
    const divider = getDivider(<Divider />);
    expect(divider).toHaveStyle('width: 100%');
  });

  it('should render the vertical divider', () => {
    const divider = getDivider(<Divider orientation="vertical" />);
    expect(divider).toHaveStyle('height: 100%');
  });

  it('should change the width', () => {
    const divider = getDivider(<Divider width="10px" />);
    expect(divider).toHaveStyle('width: 10px');
  });

  it('should change the height', () => {
    const divider = getDivider(
      <Divider orientation="vertical" height="10px" />,
    );
    expect(divider).toHaveStyle('height: 10px');
  });

  customPropTester(<Divider />, {
    containerId: 'divider',
    props: {
      orientation: ['horizontal', 'vertical'],
    },
  });
});
