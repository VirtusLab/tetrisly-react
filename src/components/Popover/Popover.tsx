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
    <tet.div {...containerStyles} {...restProps} data-testid="popover">
      {isOpen === undefined ? (
        <AnchorWrapper>{children}</AnchorWrapper>
      ) : (
        children
      )}
      {isOpen !== false && (
        <tet.div {...offsetProps} {...allContentStyles}>
          {content}
        </tet.div>
      )}
    </tet.div>
  );
};
