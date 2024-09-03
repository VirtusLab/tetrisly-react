import { MetricsCard } from './MetricsCard';
import { render } from '../../tests/render';

import { customPropTester } from '@/tests/customPropTester';

const getMetricsCard = (jsx: JSX.Element) => {
  const { getByTestId, queryByTestId } = render(jsx);
  return {
    container: getByTestId('metrics-card'),
    inlineMetrics: getByTestId('metrics-card-inline-metrics'),
    moreIcon: queryByTestId('metrics-card-more-icon'),
    walletIcon: queryByTestId('metrics-card-wallet-icon'),
  };
};

describe('Metrics Card', () => {
  customPropTester(
    <MetricsCard
      intent="Neutral"
      iconPosition="Top"
      hasTrend={false}
      hasIcon={false}
      hasMoreIcon={false}
    />,
    {
      containerId: 'metrics-card',
      props: {
        trend: ['Negative', 'None', 'Positive'],
      },
    },
  );

  it('should render the metrics card', () => {
    const { container } = getMetricsCard(<MetricsCard />);
    expect(container).toBeInTheDocument();
  });

  it('should render the more icon', () => {
    const { moreIcon } = getMetricsCard(<MetricsCard hasMoreIcon />);
    expect(moreIcon).toBeInTheDocument();
  });

  it('should not render the more icon', () => {
    const { moreIcon } = getMetricsCard(<MetricsCard />);
    expect(moreIcon).toBeNull();
  });

  it('should render the wallet icon', () => {
    const { walletIcon } = getMetricsCard(<MetricsCard hasIcon />);
    expect(walletIcon).toBeInTheDocument();
  });

  it('should not render the wallet icon', () => {
    const { walletIcon } = getMetricsCard(<MetricsCard />);
    expect(walletIcon).toBeNull();
  });
});
