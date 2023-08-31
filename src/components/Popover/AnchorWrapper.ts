import { styled } from '@xstyled/styled-components';

import { tet } from '@/tetrisly';

export const AnchorWrapper = styled(tet.div)<{ isOpen: boolean | undefined }>`
  ${({ isOpen }) =>
    isOpen === undefined &&
    `
    div {
      opacity: 0;
      pointer-events: none;
    }
  
    &:hover div {
      opacity: 1;
      pointer-events: all;
    }
  `}
`;
