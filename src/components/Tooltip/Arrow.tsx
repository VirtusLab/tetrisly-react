import { FC } from 'react';

import { TooltipPositionType } from './Tooltip.props';

import { tet } from '@/tetrisly';

type ArrowObjectProps = {
  pathDefinition: string;
  viewBox: string;
  height: number;
  width: number;
};

const ArrowObject = ({
  pathDefinition,
  viewBox,
  height,
  width,
}: ArrowObjectProps) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <tet.path d={pathDefinition} fill="$color-background-inverted" />
  </svg>
);

type ArrowProps = {
  arrowType: TooltipPositionType;
};

export const Arrow: FC<ArrowProps> = ({ arrowType }) => {
  switch (arrowType) {
    case 'bottom':
      return (
        <ArrowObject
          width={12}
          height={6}
          viewBox="0 0 12 6"
          pathDefinition="M0 6H12L7.41421 1.41421C6.63317 0.633166 5.36684 0.633165 4.58579 1.41421L0 6Z"
        />
      );
    case 'top':
      return (
        <ArrowObject
          width={12}
          height={6}
          viewBox="0 0 12 6"
          pathDefinition="M0 0H12L7.41421 4.58579C6.63317 5.36683 5.36684 5.36684 4.58579 4.58579L0 0Z"
        />
      );

    case 'right':
      return (
        <ArrowObject
          width={6}
          height={12}
          viewBox="0 0 6 12"
          pathDefinition="M6 12L6 0L1.41421 4.58579C0.633166 5.36683 0.633165 6.63316 1.41421 7.41421L6 12Z"
        />
      );
    case 'left':
      return (
        <ArrowObject
          width={6}
          height={12}
          viewBox="0 0 6 12"
          pathDefinition="M0 12L0 0L4.58579 4.58579C5.36683 5.36683 5.36684 6.63316 4.58579 7.41421L0 12Z"
        />
      );
    default:
      return (
        <ArrowObject
          width={12}
          height={6}
          viewBox="0 0 12 6"
          pathDefinition="M0 6H12L7.41421 1.41421C6.63317 0.633166 5.36684 0.633165 4.58579 1.41421L0 6Z"
        />
      );
  }
};
