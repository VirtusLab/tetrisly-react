import { render, screen } from '../../tests/render';

import { ButtonGroup } from '.';

// TODO

const getButtonGroup = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return getByTestId('button-group');
};
describe('ButtonGroup', () => {
  it('should render the ButtonGroup ', () => {
    // render(<ButtonGroup />);
    // const buttonGroup = getButtonGroup;
    // expect(buttonGroup).toBeInTheDocument();
  });
});
