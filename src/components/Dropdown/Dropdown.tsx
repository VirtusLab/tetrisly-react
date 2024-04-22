import { ReactNode, useRef } from 'react';
import styled from 'styled-components';

import { DropdownOpenContext } from './DropdownOpenContext';
import { useOutsideClick } from './hooks/useDropdown';
import { useListOrientation } from './hooks/useListOrientation';

import { tet } from '@/tetrisly';

export type DropdownProps = {
  trigger: ReactNode;
  children: ReactNode;
  parentWidth?: boolean;
  onClickOutside?: () => void;
  closeOnClickOutside?: boolean;
  open: boolean;
  openChange: (open: boolean) => void;
};

export const Dropdown = ({
  trigger,
  children,
  parentWidth = false,
  onClickOutside,
  closeOnClickOutside = true,
  open,
  openChange,
}: DropdownProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    onClickOutside?.();
    if (closeOnClickOutside) openChange(false);
  });

  const { horizontalDirection, verticalDirection } = useListOrientation({
    open,
    containerRef,
  });

  return (
    <tet.div position="relative" w="fit-content" ref={containerRef}>
      {trigger}
      <DropdownOpenContext.Provider value={open}>
        <tet.ul
          position="absolute"
          right={(horizontalDirection === 'left' || parentWidth) && '0px'}
          left={(horizontalDirection === 'right' || parentWidth) && '0px'}
          top={verticalDirection === 'bottom' && 'calc(100% + 8px)'}
          bottom={verticalDirection === 'top' && 'calc(100% + 8px)'}
          maxH="400px"
          listStyleType="none"
          zIndex="100"
          display="flex"
          w={chooseWidth({ parentWidth, open })}
          h={open ? 'auto' : '0px'}
          transitionProperty="height"
          transitionDuration="0.6s"
          flexDirection="column"
          justifyContent="center"
          borderRadius="$border-radius-xLarge"
          borderWidth={open ? '$border-width-small' : undefined}
          borderStyle="$border-style-solid"
          borderColor="$color-coolGreyA-+5"
          background="white"
          boxShadow="$elevation-bottom-300"
        >
          <NoScrollbar overflow="auto" py="$space-component-padding-small">
            {children}
          </NoScrollbar>
        </tet.ul>
      </DropdownOpenContext.Provider>
    </tet.div>
  );
};

function chooseWidth({
  parentWidth,
  open,
}: Record<'parentWidth' | 'open', boolean>) {
  if (!open) return '0px';
  if (parentWidth) return undefined;
  return '280px';
}

const NoScrollbar = styled(tet.div)`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
