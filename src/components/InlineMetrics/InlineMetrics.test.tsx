import { InlineMetrics } from './InlineMetrics';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getInlineMetrics = (jsx: JSX.Element) => {
  const { getByTestId } = render(jsx);
  return {
    container: getByTestId('inline-metrics'),
    trendContainer: getByTestId('inline-metrics-trend'),
  };
};

describe('Inline Metrics', () => {
  customPropTester(<InlineMetrics />, {
    containerId: 'inline-metrics',
    props: {
      trend: ['Negative', 'None', 'Positive'],
    },
  });

  it('should render the inline metrics', () => {
    const { container } = getInlineMetrics(<InlineMetrics />);
    expect(container).toBeInTheDocument();
  });

  it('should render the inline metrics with trend with proper color (Positive)', () => {
    const { trendContainer } = getInlineMetrics(
      <InlineMetrics trend="Positive" />,
    );
    expect(trendContainer).toHaveStyle('color: rgb(29, 124, 77)');
  });

  it('should render the inline metrics with trend with proper color (None)', () => {
    const { trendContainer } = getInlineMetrics(<InlineMetrics trend="None" />);
    expect(trendContainer).toHaveStyle('color: rgb(39, 46, 53)');
  });

  it('should render the inline metrics with trend with proper color (Negative)', () => {
    const { trendContainer } = getInlineMetrics(
      <InlineMetrics trend="Negative" />,
    );
    expect(trendContainer).toHaveStyle('color: rgb(197, 52, 52)');
  });
});
