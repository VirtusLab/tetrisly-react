import { SocialProps } from './SocialProps';
import { WithLoader } from './WithLoader';

import { tet } from '@/tetrisly';

export const Google: React.FC<SocialProps> = ({ loading }) => (
  <tet.div
    data-testid="google-icon"
    ml="-10px"
    display="flex"
    padding="$dimension-100"
    justifyContent="center"
    alignItems="center"
    borderRadius="$border-radius-medium"
    bg="$color-action-inverted-normal"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <WithLoader loading={loading}>
        <path
          d="M18.6175 10.2027C18.6175 9.61024 18.565 9.04774 18.475 8.50024H10V11.8827H14.8525C14.635 12.9927 13.9975 13.9302 13.0525 14.5677V16.8177H15.9475C17.6425 15.2502 18.6175 12.9402 18.6175 10.2027Z"
          fill="#4285F4"
        />
        <path
          d="M10.0003 18.9998C12.4303 18.9998 14.4628 18.1898 15.9478 16.8173L13.0528 14.5673C12.2428 15.1073 11.2153 15.4373 10.0003 15.4373C7.65277 15.4373 5.66527 13.8548 4.95277 11.7173H1.96777V14.0348C3.44527 16.9748 6.48277 18.9998 10.0003 18.9998Z"
          fill="#34A853"
        />
        <path
          d="M4.9525 11.7173C4.765 11.1773 4.6675 10.5998 4.6675 9.99984C4.6675 9.39984 4.7725 8.82234 4.9525 8.28234V5.96484H1.9675C1.3525 7.17984 1 8.54484 1 9.99984C1 11.4548 1.3525 12.8198 1.9675 14.0348L4.9525 11.7173Z"
          fill="#FBBC05"
        />
        <path
          d="M10.0003 4.5625C11.3278 4.5625 12.5128 5.02 13.4503 5.9125L16.0153 3.3475C14.4628 1.8925 12.4303 1 10.0003 1C6.48277 1 3.44527 3.025 1.96777 5.965L4.95277 8.2825C5.66527 6.145 7.65277 4.5625 10.0003 4.5625Z"
          fill="#EA4335"
        />
      </WithLoader>
    </svg>
  </tet.div>
);
