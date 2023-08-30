import { styled } from '@xstyled/styled-components';

import { tet } from '@/tetrisly';

export const AnchorWrapper = styled(tet.div)`
  & + div {
    opacity: 0;
    pointer-event: none;
  }
  &: hover + div {
    opacity: 1;
    pointer-event: all;
  }
`;
