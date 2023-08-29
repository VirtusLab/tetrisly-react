import { merge } from 'lodash';
import { FC, PropsWithChildren, useRef } from 'react';

import { PopoverProps } from './Popover.props';
import { config as defaultConfig } from './Popover.styles';
import { useIsPopoverContentVisible } from './useIsPopoverContentVisible';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

export const Popover: FC<PropsWithChildren<PopoverProps & MarginProps>> = ({
  align = 'center',
  origin = 'top',
  content,
  isOpen,
  custom,
  children,
  ...restProps
}) => {
  const {
    origin: originStyles,
    innerElements: { content: contentStyles },
    ...containerStyles
  } = merge(defaultConfig, custom);

  const allContentStyles = {
    ...originStyles[origin].align[align],
    ...contentStyles,
  };

  const anchorRef = useRef<HTMLDivElement>(null);

  const isVisible = useIsPopoverContentVisible(isOpen, anchorRef);

  return (
    <tet.div {...containerStyles} {...restProps} data-testid="popover">
      {isVisible && <tet.div {...allContentStyles}>{content}</tet.div>}
      <tet.div ref={anchorRef}>{children}</tet.div>
    </tet.div>
  );
};
