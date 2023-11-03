import { type FC, useMemo } from 'react';

import { AnimatedProgress } from './AnimatedProgress';
import type { LoaderProps } from './Loader.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

type NewType = FC<LoaderProps & MarginProps>;

export const Loader: NewType = ({
  appearance = 'primary',
  progress,
  shape,
  size = 'medium',
  custom,
  ...restProps
}) => {
  const styles = useMemo(
    () =>
      stylesBuilder({
        appearance,
        progress,
        shape,
        size,
        custom,
      }),
    [appearance, progress, shape, size, custom],
  );

  return (
    <tet.svg
      {...styles.container}
      xmlns="http://www.w3.org/2000/svg"
      data-testid="loader"
      {...restProps}
    >
      <tet.path {...styles.base} data-testid="loader-base" />
      {progress === undefined ? (
        <AnimatedProgress
          shape={shape}
          {...styles.progress}
          data-testid="loader-progress"
        />
      ) : (
        <tet.path {...styles.progress} data-testid="loader-progress" />
      )}
    </tet.svg>
  );
};
