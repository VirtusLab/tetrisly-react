import { LoaderProps } from '../Loader.props';
import { defaultConfig } from '../Loader.styles';

import { mergeConfigWithCustom } from '@/services';
import { BaseProps } from '@/types/BaseProps';

type StylesBuilderProps = Omit<Required<LoaderProps>, 'custom' | 'progress'> & {
  custom: LoaderProps['custom'];
  progress: LoaderProps['progress'];
};

type LoaderStylesBuilder = {
  container: BaseProps;
  base: BaseProps;
  progress: BaseProps;
};

const ANIMATED_PROGRESS_VALUE = 0.4;

const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(' ');

  return d;
};

export const stylesBuilder = ({
  custom,
  ...props
}: StylesBuilderProps): LoaderStylesBuilder => {
  const config = mergeConfigWithCustom({ defaultConfig, custom });

  const {
    shape,
    innerElements: { base, progress },
    ...restContainerStyles
  } = config;

  const sizeStyles = shape[props.shape].size[props.size];
  const { w, h, ...restSizeStyles } = sizeStyles;
  const containerSizeStyles = {
    ...sizeStyles,
    viewBox: `0 0 ${w} ${h}`,
  };

  const progressValue = Math.min(
    Math.max(props.progress ?? ANIMATED_PROGRESS_VALUE, 0),
    1,
  );

  const basePathStyles = {
    d:
      props.shape === 'circle'
        ? describeArc(w / 2, w / 2, w / 2 - 3, 0, 359.99)
        : `M 0 ${h / 2} H ${w}`,
  };

  const progressPathStyles = {
    d:
      props.shape === 'circle'
        ? describeArc(w / 2, w / 2, w / 2 - 3, 0, 359.99 * progressValue)
        : `M 0 ${h / 2} H ${progressValue * w}`,
  };

  const { appearance: baseAppearanceStyles, ...restBaseStyles } = base;

  const { appearance: progressAppearanceStyles, ...restProgressStyles } =
    progress;

  return {
    container: {
      ...containerSizeStyles,
      ...restContainerStyles,
    },
    base: {
      ...basePathStyles,
      ...restSizeStyles,
      ...baseAppearanceStyles[props.appearance],
      ...restBaseStyles,
    },
    progress: {
      ...progressPathStyles,
      ...restSizeStyles,
      ...progressAppearanceStyles[props.appearance],
      ...restProgressStyles,
    },
  };
};
