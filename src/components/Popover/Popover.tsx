import { useSpace } from '@xstyled/styled-components';
import { FC, PropsWithChildren, useMemo } from 'react';

import { AnchorWrapper, PopoverContent } from './AnchorWrapper.styled';
import type { PopoverProps } from './Popover.props';
import { stylesBuilder } from './stylesBuilder';

import type { MarginProps } from '@/types';

export const Popover: FC<PropsWithChildren<PopoverProps & MarginProps>> = ({
  align = 'center',
  origin = 'top',
  offset = 'component-gap-large',
  content,
  isOpen,
  custom,
  children,
  width = 'fit-content',
  ...restProps
}) => {
  const styles = useMemo(
    () => stylesBuilder({ origin, align, custom }),
    [origin, align, custom],
  );

  const space = useSpace(offset);
  const offsetProps = { [origin]: `-${space}` };

  return (
    <AnchorWrapper
      isOpen={isOpen}
      {...styles.container}
      data-testid="popover"
      {...restProps}
    >
      <PopoverContent
        {...styles.content}
        {...offsetProps}
        w={width}
        opacity={isOpen === false ? '0' : '1'}
        data-testid="popover-content"
      >
        {content}
      </PopoverContent>
      {children}
    </AnchorWrapper>
  );
};
