import { useSpace } from '@xstyled/styled-components';
import { FC, PropsWithChildren } from 'react';

import { AnchorWrapper, PopoverContent } from './AnchorWrapper.styled';
import { PopoverProps } from './Popover.props';
import { defaultConfig } from './Popover.styles';

import { mergeConfigWithCustom } from '@/services';
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
  } = mergeConfigWithCustom({ defaultConfig, custom });

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
      <PopoverContent
        w={width}
        {...offsetProps}
        {...allContentStyles}
        opacity={isOpen === false ? '0' : '1'}
        data-testid="popover-content"
      >
        {content}
      </PopoverContent>
      {children}
    </AnchorWrapper>
  );
};
