import { css, styled } from '@xstyled/styled-components';

import { PopoverProps } from './Popover.props';

import { tet } from '@/tetrisly';

export const PopoverContent = styled(tet.div)``;

export const AnchorWrapper = styled(tet.div)<Pick<PopoverProps, 'isOpen'>>`
  ${({ isOpen }) =>
    isOpen === undefined &&
    css`
      ${PopoverContent} {
        opacity: 0;
        pointer-events: none;
      }

      &:hover ${PopoverContent} {
        opacity: 1;
        pointer-events: all;
      }
    `}
`;
