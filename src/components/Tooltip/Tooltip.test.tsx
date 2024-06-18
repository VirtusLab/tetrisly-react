import { Tooltip } from './Tooltip';
import { fireEvent, render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const Child = () => <div />;

const getTooltipWrapper = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);
  return queryByTestId('tooltip-wrapper');
};

const getTooltipElement = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);
  return {
    arrow: queryByTestId('tooltip-arrow'),
    container: queryByTestId('tooltip-container'),
    content: queryByTestId('tooltip-content'),
  };
};

describe('Tooltip', () => {
  customPropTester(
    <Tooltip text="">
      <Child />
    </Tooltip>,
    {
      containerId: 'tooltip-wrapper',
      props: {
        arrowheadPosition: ['start', 'middle', 'end'],
        tooltipPosition: ['top', 'bottom', 'left', 'right'],
      },
    },
  );

  it('should render the tooltip wrapper', () => {
    const wrapper = getTooltipWrapper(<Tooltip text="" />);

    expect(wrapper).toBeInTheDocument();
  });

  it("shouldn't render tooltip element (container, arrow, content)", () => {
    const TooltipComponent = () => <Tooltip text="" />;
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    const { container, content, arrow } = getTooltipElement(
      <TooltipComponent />,
    );

    expect(wrapper).toBeInTheDocument();
    expect(container).toBeNull();
    expect(arrow).toBeNull();
    expect(content).toBeNull();
  });

  it('should render the tooltip element (container, arrow, content)', () => {
    const TooltipComponent = () => (
      <Tooltip text="">
        <Child />
      </Tooltip>
    );
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    if (wrapper) {
      fireEvent.mouseEnter(wrapper);
    }

    const { container } = getTooltipElement(<TooltipComponent />);
    expect(container).toBeInTheDocument();
  });

  it('should render the tooltip arrow', () => {
    const TooltipComponent = () => (
      <Tooltip text="">
        <Child />
      </Tooltip>
    );
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    if (wrapper) {
      fireEvent.mouseEnter(wrapper);
    }

    const { arrow } = getTooltipElement(<TooltipComponent />);
    expect(arrow).toBeInTheDocument();
  });

  it('should render correct text', () => {
    const TooltipComponent = () => (
      <Tooltip text="Hello there">
        <Child />
      </Tooltip>
    );
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    if (wrapper) {
      fireEvent.mouseEnter(wrapper);
    }

    const { content } = getTooltipElement(<TooltipComponent />);
    expect(content).toHaveTextContent('Hello there');
  });

  it('should render correct background color (tooltip-element)', () => {
    const TooltipComponent = () => (
      <Tooltip text="">
        <Child />
      </Tooltip>
    );
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    if (wrapper) {
      fireEvent.mouseEnter(wrapper);
    }

    const { content } = getTooltipElement(<TooltipComponent />);

    expect(content).toHaveStyle('background-color: rgb(39,46,53);');
  });

  it('should align text properly (tooltipPosition = top)', () => {
    const TooltipComponent = () => (
      <Tooltip text="">
        <Child />
      </Tooltip>
    );
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    if (wrapper) {
      fireEvent.mouseEnter(wrapper);
    }

    const { content } = getTooltipElement(<TooltipComponent />);
    expect(content).toHaveStyle('text-align: center');
  });

  it('should render tooltip element (on focus)', () => {
    const TooltipComponent = () => (
      <Tooltip text="">
        <Child />
      </Tooltip>
    );
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    if (wrapper) {
      fireEvent.focus(wrapper);
    }

    const { container } = getTooltipElement(<TooltipComponent />);
    expect(container).toBeInTheDocument();
  });

  it("shouldn't render tooltip element (container, arrow, content)", () => {
    const TooltipComponent = () => (
      <Tooltip text="">
        <Child />
      </Tooltip>
    );
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    if (wrapper) {
      fireEvent.mouseEnter(wrapper);
      fireEvent.mouseLeave(wrapper);
    }
    const { arrow, content, container } = getTooltipElement(
      <TooltipComponent />,
    );

    expect(wrapper).toBeInTheDocument();
    expect(container).toBeNull();
    expect(arrow).toBeNull();
    expect(content).toBeNull();
  });

  it("shouldn't render tooltip element (container, arrow, content)", () => {
    const TooltipComponent = () => (
      <Tooltip text="">
        <Child />
      </Tooltip>
    );
    const wrapper = getTooltipWrapper(<TooltipComponent />);

    if (wrapper) {
      fireEvent.focus(wrapper);
      fireEvent.blur(wrapper);
    }
    const { arrow, content, container } = getTooltipElement(
      <TooltipComponent />,
    );

    expect(wrapper).toBeInTheDocument();
    expect(container).toBeNull();
    expect(arrow).toBeNull();
    expect(content).toBeNull();
  });
});
