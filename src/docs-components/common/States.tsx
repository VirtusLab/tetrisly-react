import {
  FlexBasisProps,
  GapProps,
  WidthProps,
} from '@xstyled/styled-components';
import { FC } from 'react';

import { tet } from '@/tetrisly';

export const States: FC<{
  states: string[] | readonly string[];
  gap?: GapProps['gap'];
  itemWidth?: WidthProps['w'];
  flexBasis?: FlexBasisProps['flexBasis'];
}> = ({ states, gap, itemWidth, flexBasis }) => (
  <tet.div display="flex" gap={gap} py="300">
    {states.map((state) => (
      <tet.div
        key={state}
        w={itemWidth}
        flexShrink="0"
        flexBasis={flexBasis}
        flexGrow="1"
      >
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
