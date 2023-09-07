import { FC } from 'react';

import { SocialProps } from './SocialProps';
import { WithLoader } from './WithLoader';

import { tet } from '@/tetrisly';

export const Google: FC<SocialProps> = ({ loading }) => (
  <tet.div
    data-testid="google-icon"
    ml="-10px"
    display="flex"
    padding="100"
    justifyContent="center"
    alignItems="center"
    borderRadius="medium"
    bg="action-inverted-normal"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <WithLoader loading={loading}>
        <path
          d="M17.6175 9.20274C17.6175 8.61024 17.565 8.04774 17.475 7.50024H9V10.8827H13.8525C13.635 11.9927 12.9975 12.9302 12.0525 13.5677V15.8177H14.9475C16.6425 14.2502 17.6175 11.9402 17.6175 9.20274Z"
          fill="#4285F4"
        />
        <path
          d="M9.00027 17.9998C11.4303 17.9998 13.4628 17.1898 14.9478 15.8173L12.0528 13.5673C11.2428 14.1073 10.2153 14.4373 9.00027 14.4373C6.65277 14.4373 4.66527 12.8548 3.95277 10.7173H0.967773V13.0348C2.44527 15.9748 5.48277 17.9998 9.00027 17.9998Z"
          fill="#34A853"
        />
        <path
          d="M3.9525 10.7173C3.765 10.1773 3.6675 9.59984 3.6675 8.99984C3.6675 8.39984 3.7725 7.82234 3.9525 7.28234V4.96484H0.967499C0.352499 6.17984 0 7.54484 0 8.99984C0 10.4548 0.352499 11.8198 0.967499 13.0348L3.9525 10.7173Z"
          fill="#FBBC05"
        />
        <path
          d="M9.00027 3.5625C10.3278 3.5625 11.5128 4.02 12.4503 4.9125L15.0153 2.3475C13.4628 0.892501 11.4303 0 9.00027 0C5.48277 0 2.44527 2.025 0.967773 4.965L3.95277 7.2825C4.66527 5.145 6.65277 3.5625 9.00027 3.5625Z"
          fill="#EA4335"
        />
      </WithLoader>
    </svg>
  </tet.div>
);
