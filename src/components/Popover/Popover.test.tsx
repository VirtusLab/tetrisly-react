import { Popover } from './Popover';
import { render } from '../../tests/render';

const getPopover = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('popover');
};

describe('DiPopovervider', () => {
  it('should render the popover', () => {
    const divider = getPopover(<Popover content="Popover" />);
    expect(divider).toBeInTheDocument();
  });
});
