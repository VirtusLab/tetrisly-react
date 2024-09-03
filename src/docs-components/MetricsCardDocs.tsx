import { TrendType } from '@/components/InlineMetrics/InlineMetrics.props';
import { MetricsCard } from '@/components/MetricsCard';
import type { IntentType } from '@/components/MetricsCard/MetricsCard.props';
import { tet } from '@/tetrisly';

const trends: TrendType[] = ['None', 'Positive', 'Negative'];
const intentNames: Record<TrendType, IntentType> = {
  None: 'Neutral',
  Positive: 'Positive',
  Negative: 'Negative',
};

export const MetricsCardDocs = () => (
  <tet.section py="$space-component-padding-4xLarge">
    <tet.div px="$dimension-800" py="$dimension-300">
      <tet.div display="flex">
        {trends.map((trend) => (
          <tet.section
            key={trend}
            display="flex"
            flexDirection="column"
            px="$dimension-400"
            my="auto"
          >
            <tet.div
              color="$color-content-secondary"
              text="$typo-body-large"
              borderBottom="1px solid"
              borderColor="$color-border-default"
            >
              Intent: {intentNames[trend]}
            </tet.div>
            <tet.div
              key={trend}
              display="flex"
              flexBasis="100px"
              flexShrink="0"
              flexGrow="1"
              mt={40}
            >
              <MetricsCard
                trend={trend}
                trendValue="24%"
                metrics="$123.12"
                label="Total Earnings"
                intent={intentNames[trend]}
                iconPosition="Top"
                hasIcon
                hasTrend
              />
            </tet.div>
          </tet.section>
        ))}
      </tet.div>
    </tet.div>
  </tet.section>
);
