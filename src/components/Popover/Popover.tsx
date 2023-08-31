import { useSpace } from '@xstyled/styled-components';
import { merge } from 'lodash';
import { FC, PropsWithChildren } from 'react';

import { AnchorWrapper } from './AnchorWrapper';
import { PopoverProps } from './Popover.props';
import { config as defaultConfig } from './Popover.styles';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

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
  const {
    origin: originStyles,
    innerElements: { content: contentStyles },
    ...containerStyles
  } = merge(defaultConfig, custom);

  const allContentStyles = {
    ...originStyles[origin].align[align],
    ...contentStyles,
  };

  const space = useSpace(offset);
  const offsetProps = { [origin]: `-${space}` };

  return (
    <AnchorWrapper
      isOpen={isOpen}
      {...containerStyles}
      {...restProps}
      data-testid="popover"
    >
      <tet.div
        w={width}
        {...offsetProps}
        {...allContentStyles}
        opacity={isOpen === false ? '0' : '1'}
        data-testid="popover-content"
      >
        {content}
      </tet.div>
      {children}
    </AnchorWrapper>
  );
};
