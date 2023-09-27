import { ReactNode } from 'react';

import { tet } from '@/tetrisly';
import { BaseProps } from '@/types';

interface SectionHeaderProps extends BaseProps {
  variant: 'H1' | 'H2' | 'H3' | 'Hero';
  inverted?: boolean;
  children?: ReactNode;
  labels?: string[];
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const SectionHeader = ({
  inverted,
  variant,
  labels,
  children,
  ...props
}: SectionHeaderProps) => {
  const label = labels ? (
    <tet.div display="flex" gap="8px">
      {labels.map((l, i) =>
        i !== 0 ? (
          <>
            <tet.span>·</tet.span>
            <tet.span>{l}</tet.span>
          </>
        ) : (
          <tet.span>{l}</tet.span>
        ),
      )}
    </tet.div>
  ) : (
    children
  );
  if (variant === 'Hero') {
    return (
      <tet.h1
        text={{ md: 'header-4xLarge', _: 'header-xLarge' }}
        py="500"
        color={inverted ? 'content-primary-inverted' : 'content-primary'}
        {...(props as BaseProps)}
      >
        {label}
      </tet.h1>
    );
  }
  if (variant === 'H1') {
    return (
      <tet.h2
        text={{ md: 'header-3xLarge', _: 'header-large' }}
        color={inverted ? 'content-primary-inverted' : 'content-primary'}
        {...(props as BaseProps)}
      >
        {label}
      </tet.h2>
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
          text={{ md: 'body-large', _: 'body-medium' }}
          color={inverted ? 'content-secondary-inverted' : 'content-secondary'}
          {...(props as BaseProps)}
        >
          {label}
        </tet.h3>
      </tet.div>
    );
  }
  if (variant === 'H3') {
    return (
      <tet.h4
        text={{ md: 'body-medium', _: 'body-small' }}
        color="content-secondary"
        {...(props as BaseProps)}
      >
        {label}
      </tet.h4>
    );
  }
  return null;
};
