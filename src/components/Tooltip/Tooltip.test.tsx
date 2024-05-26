import { Tooltip } from './Tooltip';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getTooltip = (jsx: JSX.Element) => {
  const { queryByTestId } = render(jsx);

  return {
    arrow: queryByTestId('tooltip-arrow'),
    container: queryByTestId('tooltip-container'),
    content: queryByTestId('tooltip-content'),
    wrapper: queryByTestId('tooltip'),
  };
};

describe('Tooltip', () => {
  customPropTester(<Tooltip text="Hello there" />, {
    containerId: 'tooltip-container',
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
    const { content } = getTooltip(<Tooltip text="Hello there" />);
    expect(content).toHaveTextContent('Hello there');
  });

  // it('should render correct background color (none)', () => {
  //   const { wrapper } = getTooltip(<Tooltip text="Hello there" />);
  //   expect(wrapper).toHaveStyle('color: rgb(255, 255, 255);');
  // });

  it('should align text properly (tooltipPosition = top', () => {
    const { content } = getTooltip(
      <Tooltip text="Hello there" tooltipPosition="top" />,
    );
    expect(content).toHaveStyle('text-align: center'); // TODO write more tests
  });
});
