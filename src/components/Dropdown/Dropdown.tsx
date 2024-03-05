import { ReactNode, useRef } from 'react';
import styled from 'styled-components';

import { DropdownContext } from './DropdownContext';
import { useDropdown } from './hooks/useDropdown';
import { useListOrientation } from './hooks/useListOrientation';

import { tet } from '@/tetrisly';

type DropdownProps = {
  renderTrigger: (toggle: () => void) => React.ReactNode;
  children: ReactNode;
  parentWidth?: boolean;
};

export const Dropdown = ({
  renderTrigger,
  children,
  parentWidth = false,
}: DropdownProps) => {
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const dropdown = useDropdown(dropdownContainerRef);

  const { horizontalDirection, verticalDirection } = useListOrientation({
    open: dropdown.isOpen,
    containerRef: dropdownContainerRef,
  });

  return (
    <tet.div position="relative" w="fit-content" ref={dropdownContainerRef}>
      {renderTrigger(dropdown.toggle)}
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
        w={chooseWidth({ parentWidth, open: dropdown.isOpen })}
        h={dropdown.isOpen ? 'auto' : '0px'}
        transition="height 0.6s"
        flexDirection="column"
        justifyContent="center"
        borderRadius="$border-radius-xLarge"
        borderWidth={dropdown.isOpen ? '$border-width-small' : undefined}
        borderStyle="$border-style-solid"
        borderColor="$color-coolGreyA-+5"
        background="white"
        boxShadow="$elevation-bottom-300"
      >
        <NoScrollbar overflow="auto" py="$space-component-padding-small">
          <DropdownContext.Provider value={dropdown}>
            {children}
          </DropdownContext.Provider>
        </NoScrollbar>
      </tet.ul>
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
