import { FC } from 'react';

import { TooltipPositionType } from './Tooltip.props';

type ArrowProps = {
  arrowType: TooltipPositionType;
};

export const Arrow: FC<ArrowProps> = ({ arrowType }) => {
  switch (arrowType) {
    case 'bottom':
      return (
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6H12L7.41421 1.41421C6.63317 0.633166 5.36684 0.633165 4.58579 1.41421L0 6Z"
            fill="#272E35"
          />
        </svg>
      );
    case 'top':
      return (
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H12L7.41421 4.58579C6.63317 5.36683 5.36684 5.36684 4.58579 4.58579L0 0Z"
            fill="#272E35"
          />
        </svg>
      );

    case 'right':
      return (
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 12L6 0L1.41421 4.58579C0.633166 5.36683 0.633165 6.63316 1.41421 7.41421L6 12Z"
            fill="#272E35"
          />
        </svg>
      );
    case 'left':
      return (
        <svg
          width="6"
          height="12"
          viewBox="0 0 6 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12L0 0L4.58579 4.58579C5.36683 5.36683 5.36684 6.63316 4.58579 7.41421L0 12Z"
            fill="#272E35"
          />
        </svg>
      );
    default:
      return (
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6H12L7.41421 1.41421C6.63317 0.633166 5.36684 0.633165 4.58579 1.41421L0 6Z"
            fill="#272E35"
          />
        </svg>
      );
  }
};
