import { MarginProps } from '@xstyled/styled-components';

import { AnimatedPath } from './AnimatedPath';
import { LoaderProps } from './Loader.props';
import { stylesBuilder } from './stylesBuilder';

import { tet } from '@/tetrisly';

export const Loader = ({
  appearance = 'primary',
  progress,
  shape,
  size = 'medium',
  custom = {},
}: LoaderProps & MarginProps) => {
  const { svgStyles, baseStyles, progressStyles } = stylesBuilder({
    appearance,
    progress,
    shape,
    size,
    custom,
  });
  return (
    <tet.svg
      {...svgStyles}
      xmlns="http://www.w3.org/2000/svg"
      data-testid="loader"
    >
      <tet.path {...baseStyles} data-testid="loader-base" />
      {progress === undefined ? (
        <AnimatedPath
          shape={shape}
          {...progressStyles}
          data-testid="loader-progress"
        />
      ) : (
        <tet.path {...progressStyles} data-testid="loader-progress" />
      )}
    </tet.svg>
  );
};
