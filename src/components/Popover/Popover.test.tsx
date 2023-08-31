import { Popover } from './Popover';
import { render } from '../../tests/render';

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

  it('should render the content if isOpen is a true', () => {
    const { content } = getPopover(<Popover content="Popover" isOpen />);
    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle('opacity: 1');
  });

  it('should not render the content if isOpen is a false', () => {
    const { content } = getPopover(
      <Popover content="Popover" isOpen={false} />,
    );
    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle('opacity: 0');
  });

  it('should render content on the top centered', () => {
    const { content } = getPopover(<Popover content="Popover" />);
    expect(content).toHaveStyle('transform: translate(-50%,-100%)');
  });

  it('should render content on the top start', () => {
    const { content } = getPopover(<Popover content="Popover" align="start" />);
    expect(content).toHaveStyle('transform: translate(0%,-100%)');
  });

  it('should render content on the top end', () => {
    const { content } = getPopover(<Popover content="Popover" align="end" />);
    expect(content).toHaveStyle('transform: translate(-100%,-100%)');
  });

  it('should render content on the bottom centered', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="bottom" />,
    );
    expect(content).toHaveStyle('transform: translate(-50%,100%)');
  });

  it('should render content on the bottom start', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="bottom" align="start" />,
    );
    expect(content).toHaveStyle('transform: translate(0%,100%)');
  });

  it('should render content on the bottom end', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="bottom" align="end" />,
    );
    expect(content).toHaveStyle('transform: translate(-100%,100%)');
  });

  it('should render content on the left centered', () => {
    const { content } = getPopover(<Popover content="Popover" origin="left" />);
    expect(content).toHaveStyle('transform: translate(-100%,-50%)');
  });

  it('should render content on the left start', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="left" align="start" />,
    );
    expect(content).toHaveStyle('transform: translate(-100%,0%)');
  });

  it('should render content on the left end', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="left" align="end" />,
    );
    expect(content).toHaveStyle('transform: translate(-100%,-100%)');
  });

  it('should render content on the right centered', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="right" />,
    );
    expect(content).toHaveStyle('transform: translate(100%,-50%)');
  });

  it('should render content on the right start', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="right" align="start" />,
    );
    expect(content).toHaveStyle('transform: translate(100%,0%)');
  });

  it('should render content on the right end', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="right" align="end" />,
    );
    expect(content).toHaveStyle('transform: translate(100%,-100%)');
  });

  it('should render correct offset (top)', () => {
    const { content } = getPopover(<Popover content="Popover" offset="25px" />);
    expect(content).toHaveStyle('top: -25px');
  });

  it('should render correct offset (bottom)', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="bottom" offset="25px" />,
    );
    expect(content).toHaveStyle('bottom: -25px');
  });

  it('should render correct offset (left)', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="left" offset="25px" />,
    );
    expect(content).toHaveStyle('left: -25px');
  });

  it('should render correct offset (right)', () => {
    const { content } = getPopover(
      <Popover content="Popover" origin="right" offset="25px" />,
    );
    expect(content).toHaveStyle('right: -25px');
  });

  it('should propagate custom props', () => {
    const { popover } = getPopover(
      <Popover
        content="Popover"
        custom={{ backgroundColor: 'background-negative-subtle' }}
      />,
    );

    expect(popover).toHaveStyle('background-color: rgb(254, 245, 245)');
  });
});
