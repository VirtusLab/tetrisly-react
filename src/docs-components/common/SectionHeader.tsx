import { ReactNode } from 'react';

import { tet } from '@/tetrisly';
import { BaseProps } from '@/types';

interface SectionHeaderProps extends BaseProps {
  variant: 'H1' | 'H2' | 'H3' | 'Hero';
  inverted?: boolean;
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const SectionHeader = ({
  inverted,
  variant,
  ...props
}: SectionHeaderProps) => {
  if (variant === 'Hero') {
    return (
      <tet.h1
        text="header-4xLarge"
        px="1000"
        py="500"
        color={inverted ? 'content-primary-inverted' : 'content-primary'}
        {...(props as BaseProps)}
      />
    );
  }
  if (variant === 'H1') {
    return (
      <tet.div px="1000">
        <tet.h2
          text="header-3xLarge"
          color={inverted ? 'content-primary-inverted' : 'content-primary'}
          {...(props as BaseProps)}
        />
      </tet.div>
    );
  }
  if (variant === 'H2') {
    return (
      <tet.div
        display="flex"
        borderBottomWidth="1px"
        borderBottomColor={
          inverted ? 'border-neutral-strong' : 'border-default'
        }
      >
        <tet.h3
          text="body-large"
          color={inverted ? 'content-secondary-inverted' : 'content-secondary'}
          {...(props as BaseProps)}
        />
      </tet.div>
    );
  }
  if (variant === 'H3') {
    return (
      <tet.h4
        text="body-medium"
        color="content-secondary"
        {...(props as BaseProps)}
      />
    );
  }
  return null;
};
