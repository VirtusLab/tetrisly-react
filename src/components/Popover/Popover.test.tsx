import { Popover } from './Popover';
import { fireEvent, render } from '../../tests/render';
import { Button } from '../Button';

const getPopover = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);
  return {
    popover: queryByTestId('popover'),
    content: queryByTestId('popover-content'),
  };
};

describe('Popover', () => {
  it('should render the popover', () => {
    const { popover } = getPopover(<Popover content="Popover" />);
    expect(popover).toBeInTheDocument();
  });

  it('should render the content if props provided', () => {
    const { content } = getPopover(<Popover content="Popover" isOpen />);
    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle('opacity: 1');
  });

  // it('should render the content if a children is hovered and isOpen prop is undefined', () => {
  //   const { popover, content } = getPopover(
  //     <Popover content="Popover">
  //       <Button label="Label" />
  //     </Popover>,
  //   );

  //   const button = popover?.querySelector('button');

  //   if (button) {
  //     fireEvent.mouseOver(button);
  //   }

  //   expect(content).toBeInTheDocument();
  //   expect(content).toHaveStyle('opacity: 0');
  // });
});
