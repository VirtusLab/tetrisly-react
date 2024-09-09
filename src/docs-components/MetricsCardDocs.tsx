import { SectionHeader } from './common/SectionHeader';

import { TrendType } from '@/components/InlineMetrics/InlineMetrics.props';
import { MetricsCard } from '@/components/MetricsCard';
import type { IconPositionType } from '@/components/MetricsCard/MetricsCard.props';
import { tet } from '@/tetrisly';

const trends: TrendType[] = ['None', 'Positive', 'Negative'];
const iconPositions: IconPositionType[] = ['Top', 'Left'];
const intentNames: Record<TrendType, string> = {
  None: 'Neutral',
  Positive: 'Positive',
  Negative: 'Negative',
};

export const MetricsCardDocs = () => (
  <tet.section display="flex" flexWrap="wrap" justifyContent="center">
    {iconPositions.map((position) => (
      <>
        <SectionHeader
          variant="H1"
          as="h2"
          px="$dimension-1000"
          py="$dimension-1000"
        >
          {position} Icon Position
        </SectionHeader>
        {trends.map((trend) => (
          <tet.section
            key={trend}
            display="flex"
            flexDirection="column"
            px="$dimension-300"
            py="$dimension-300"
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
                iconPosition={position}
                hasIcon
                hasTrend
              />
            </tet.div>
          </tet.section>
        ))}
      </>
    ))}
  </tet.section>
);
