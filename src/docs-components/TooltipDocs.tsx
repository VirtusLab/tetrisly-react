import { capitalize } from 'lodash';
import type { FC } from 'react';

import { State } from './common/States';

import { Tooltip } from '@/components/Tooltip/Tooltip';
import { SectionHeader } from '@/docs-components/common/SectionHeader.tsx';
import { tet } from '@/tetrisly';

const labels = [
  'Arrowhead Position: Start',
  'Arrowhead Position: Middle',
  'Arrowhead Position: End',
] as const;
const arrowheadPositions = ['start', 'middle', 'end'] as const;
const tooltipPositions = ['bottom', 'top', 'right', 'left'] as const;

const Rec = () => <tet.div h="20" w="50" bg="lightblue" />;

export const TooltipDocs: FC = () => (
  <>
    {arrowheadPositions.map((arrowheadPosition, i) => (
      <tet.section
        key={arrowheadPosition}
        display="flex"
        padding="40px 0px"
        flexDirection="column"
      >
        <SectionHeader px="$dimension-1000" variant="H1" my="auto">
          {labels[i]}
        </SectionHeader>
        <tet.div
          px="$dimension-1000"
          borderBottomWidth="1px"
          borderBottomColor="$color-border-neutral-subtle"
        >
          <tet.div
            py="$dimension-600"
            display="flex"
            flexWrap="nowrap"
            flexDirection="row"
            gap="$dimension-500"
            overflowX="scroll"
          >
            {tooltipPositions.map((tooltipPosition, j) => (
              <tet.div
                key={tooltipPosition}
                display="flex"
                flexDirection="column"
                gap="$dimension-400"
                flexBasis="100"
                flexShrink="0"
                flexGrow="1"
              >
                <State
                  key={tooltipPositions[j]}
                  state={capitalize(tooltipPositions[j])}
                />
                <tet.div py="$space-component-padding-4xLarge">
                  <Tooltip
                    arrowheadPosition={arrowheadPosition}
                    tooltipPosition={tooltipPosition}
                    text="Tooltip Placeholder vsd vds v ds vds bv ds vd vd v dd vd sdv  dsv"
                    // />
                  >
                    <Rec />
                  </Tooltip>
                </tet.div>
              </tet.div>
            ))}
          </tet.div>
        </tet.div>
      </tet.section>
    ))}
  </>
);
