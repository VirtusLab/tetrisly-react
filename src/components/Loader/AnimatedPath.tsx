import styled, { keyframes } from '@xstyled/styled-components';

import { tet } from '@/tetrisly';

const animationCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animationBar = keyframes`
  0% {
    transform: translate(-64px, 0px);
  }
  100% {
    transform: translate(192px, 0px);
  }
`;

export const AnimatedPath = styled(tet.path) <{ shape: string }>`
  aspect-ratio: 1;
  transform-origin: center center;
  animation: ${({ shape }) =>
    shape === 'circle' ? animationCircle : animationBar}
    1.4s infinite linear;
`;
