import { merge } from 'lodash';

import { LoaderProps } from '../Loader.props';
import { config as defaultConfig } from '../Loader.styles';

type StylesBuilderProps = Omit<Required<LoaderProps>, 'progress'> & {
  progress: number | undefined;
};

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
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
}

export function stylesBuilder({ custom = {}, ...props }: StylesBuilderProps) {
  const config = merge(defaultConfig, custom);

  const size = config.size[props.shape][props.size];
  const { w, h, ...restSizeStyles } = size;
  const svgSizeStyles = {
    ...size,
    viewBox: `0 0 ${w} ${h}`,
  };

  const progress = Math.min(Math.max(props.progress ?? 0.4, 0), 1);

  const baseSizeStyles = {
    d:
      props.shape === 'circle'
        ? describeArc(w / 2, w / 2, w / 2 - 3, 0, 359.99)
        : `M 0 ${h / 2} H ${w}`,
  };

  const progressSizeStyles = {
    d:
      props.shape === 'circle'
        ? describeArc(w / 2, w / 2, w / 2 - 3, 0, 359.99 * progress)
        : `M 0 ${h / 2} H ${progress * w}`,
  };

  const svgStyles = {
    ...svgSizeStyles,
    ...config.svg,
  };

  const baseStyles = {
    ...baseSizeStyles,
    ...restSizeStyles,
    ...config.appearance[props.appearance].base,
    ...config.progress,
  };

  const progressStyles = {
    ...progressSizeStyles,
    ...restSizeStyles,
    ...config.appearance[props.appearance].progress,
    ...config.progress,
  };

  return { svgStyles, baseStyles, progressStyles };
}
