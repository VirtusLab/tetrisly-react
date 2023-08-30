import { merge } from 'lodash';
import { FC, PropsWithChildren } from 'react';

import { PopoverProps } from './Popover.props';
import { config as defaultConfig } from './Popover.styles';
import { useIsPopoverVisible } from './useIsPopoverVisible';

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

  const { isVisible, hoverHandlers } = useIsPopoverVisible(isOpen);

  return (
    <tet.div {...containerStyles} {...restProps} data-testid="popover">
      {isVisible && <tet.div {...allContentStyles}>{content}</tet.div>}
      <tet.div {...hoverHandlers}>{children}</tet.div>
    </tet.div>
  );
};
