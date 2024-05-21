import { Tooltip } from './Tooltip';
import { render } from '../../tests/render';
import { customPropTester } from '@/tests/customPropTester';


const getTooltip = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    container: queryByTestId('tooltip'),
    arrow: queryByTestId('tooltip-arrow'),
    content: queryByTestId('tooltip-content'),
  };
};

describe('Tooltip', () => {
    customPropTester(<Tooltip text="Hello there" />, {
    containerId: 'tooltip',
    props: {
      arrowheadPosition: ['start', 'middle', 'end'],
      tooltipPosition: ['top', 'bottom', 'left', 'right'],
    },
  });

  it('should render the tooltip', () => {
    const { container } = getTooltip(<Tooltip text="Tooltip" />);
    expect(container).toBeInTheDocument();
  });

    it('should render correct text', () => {
    const { container } = getTooltip(<Tooltip text="Hello there" />);
    expect(container).toHaveTextContent('Hello there');
  });

    it('should render correct background color (none)', () => {
    const { container, arrow, content } = getTooltip(
      <Tooltip
        text="Hello there"
      />,
    );
    expect(container).toHaveStyle('background-color: rgb(39, 46, 53);');
    expect(arrow).toHaveStyle('color: rgb(39, 46, 53);');
    expect(content).toHaveStyle('color: rgb(255, 255, 255);');
  });

  it('should align text properly (tooltipPosition = top', () => {
    const { content } = getTooltip(
      <Tooltip
        text="Hello there"
        tooltipPosition='top'
      />,
    );
    expect(content).toHaveStyle('text-align: "right');
  });
});
