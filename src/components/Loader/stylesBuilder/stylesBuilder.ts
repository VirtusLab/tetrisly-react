import { merge } from 'lodash';

import { LoaderProps } from '../Loader.props';
import { config as defaultConfig } from '../Loader.styles';

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
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
  endAngle: number
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

export function stylesBuilder({
  custom = {},
  ...props
}: Required<LoaderProps>) {
  const config = merge(defaultConfig, custom);

  const size = config.size[props.shape][props.size];
  const svgSizeStyles = {
    ...size,
    viewBox: `0 0 ${size.width} ${size.height}`,
  };

  const baseSizeStyles = {
    d:
      props.shape === 'circle'
        ? describeArc(
          size.width / 2,
          size.width / 2,
          size.width / 2 - 3,
          0,
          359.99
        )
        : `M 0 ${size.height / 2} H ${size.width}`,
  };

  const progressSizeStyles = {
    d:
      props.shape === 'circle'
        ? describeArc(
          size.width / 2,
          size.width / 2,
          size.width / 2 - 3,
          0,
          360 * (props.progress ?? 0.4)
        )
        : `M 0 ${size.height / 2} H ${(props.progress ?? 0.5) * size.width}`,
  };

  const svgStyles = {
    ...svgSizeStyles,
    ...config.svg,
  };

  const baseStyles = {
    ...baseSizeStyles,
    ...config.base[props.shape],
    ...config.appearance[props.appearance].base,
  };

  const progressStyles = {
    ...progressSizeStyles,
    ...config.progress[props.shape],
    ...config.appearance[props.appearance].progress,
  };

  return { svgStyles, baseStyles, progressStyles };
}
