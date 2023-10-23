import { Fragment, ReactNode } from 'react';

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
          <Fragment key={l}>
            <tet.span>·</tet.span>
            <tet.span>{l}</tet.span>
          </Fragment>
        ) : (
          <tet.span key={l}>{l}</tet.span>
        ),
      )}
    </tet.div>
  ) : (
    children
  );
  if (variant === 'Hero') {
    return (
      <tet.h1
        text={{ md: '$typo-header-4xLarge', _: '$typo-header-xLarge' }}
        py="$dimension-500"
        color={
          inverted
            ? '$color-content-primary-inverted'
            : '$color-content-primary'
        }
        {...(props as BaseProps)}
      >
        {label}
      </tet.h1>
    );
  }
  if (variant === 'H1') {
    return (
      <tet.h2
        text={{ md: '$typo-header-3xLarge', _: '$typo-header-large' }}
        color={
          inverted
            ? '$color-content-primary-inverted'
            : '$color-content-primary'
        }
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
          inverted ? '$color-border-neutral-strong' : '$color-border-default'
        }
      >
        <tet.h3
          text={{ md: '$typo-body-large', _: '$typo-body-medium' }}
          color={
            inverted
              ? '$color-content-secondary-inverted'
              : '$color-content-secondary'
          }
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
        text={{ md: '$typo-body-medium', _: '$typo-body-small' }}
        color="$color-content-secondary"
        {...(props as BaseProps)}
      >
        {label}
      </tet.h4>
    );
  }
  return null;
};
