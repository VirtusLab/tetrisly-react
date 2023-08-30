import { GapProps, WidthProps } from '@xstyled/styled-components';
import { FC } from 'react';

import { tet } from '@/tetrisly';

export const States: FC<{
  states: string[] | readonly string[];
  gap: GapProps['gap'];
  itemWidth: WidthProps['w'];
}> = ({ states, gap, itemWidth }) => (
  <tet.div display="flex" gap={gap} py="300">
    {states.map((state) => (
      <tet.div w={itemWidth} flexShrink="0">
        <tet.span text="body-medium">
          <tet.mark
            borderRadius="small"
            bg="nonSemantic-orange-background-onSubtle"
            px="component-padding-2xSmall"
            color="content-primary"
          >
            {state}
          </tet.mark>
        </tet.span>
      </tet.div>
    ))}
  </tet.div>
);
