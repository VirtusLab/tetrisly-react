import { SocialProps } from './SocialProps';
import { WithLoader } from './WithLoader';

export const Figma: React.FC<SocialProps> = ({ fill, loading }) => (
  <WithLoader loading={loading}>
    <svg
      data-testid="figma-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill={fill === 'white' ? 'black' : 'white'}
    >
      <path
        d="M3.99999 19C5.65599 19 6.99999 17.656 6.99999 16V13H3.99999C2.344 13 1 14.344 1 16C1 17.656 2.344 19 3.99999 19Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M1 9.99975C1 8.34375 2.344 6.99976 3.99999 6.99976H6.99999V12.9997H3.99999C2.344 12.9997 1 11.6557 1 9.99975Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M1 3.99999C1 2.344 2.344 1 3.99999 1H6.99999V6.99999H3.99999C2.344 6.99999 1 5.65599 1 3.99999Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M7 1H9.99999C11.656 1 13 2.344 13 3.99999C13 5.65599 11.656 6.99999 9.99999 6.99999H7V1Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M13 9.99975C13 11.6557 11.656 12.9997 9.99999 12.9997C8.344 12.9997 7 11.6557 7 9.99975C7 8.34375 8.344 6.99976 9.99999 6.99976C11.656 6.99976 13 8.34375 13 9.99975Z"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  </WithLoader>
);
