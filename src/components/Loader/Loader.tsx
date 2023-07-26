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
    <tet.svg {...svgStyles}>
      <tet.path {...baseStyles} />
      {progress === undefined ? (
        <AnimatedPath shape={shape} {...progressStyles} />
      ) : (
        <tet.path {...progressStyles} />
      )}
    </tet.svg>
  );
};
