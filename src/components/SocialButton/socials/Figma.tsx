import { SocialProps } from './SocialProps';
import { WithLoader } from './WithLoader';

export const Figma: React.FC<SocialProps> = ({ fill, loading }) => (
  <WithLoader loading={loading}>
    <svg
      data-testid="figma-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99999 19C8.65599 19 9.99999 17.656 9.99999 16V13H6.99999C5.344 13 4 14.344 4 16C4 17.656 5.344 19 6.99999 19Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M4 9.99975C4 8.34375 5.344 6.99976 6.99999 6.99976H9.99999V12.9997H6.99999C5.344 12.9997 4 11.6557 4 9.99975Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M4 3.99999C4 2.344 5.344 1 6.99999 1H9.99999V6.99999H6.99999C5.344 6.99999 4 5.65599 4 3.99999Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M10 1H13C14.656 1 16 2.344 16 3.99999C16 5.65599 14.656 6.99999 13 6.99999H10V1Z"
        stroke={fill}
        strokeWidth="1.5"
      />
      <path
        d="M16 9.99975C16 11.6557 14.656 12.9997 13 12.9997C11.344 12.9997 10 11.6557 10 9.99975C10 8.34375 11.344 6.99976 13 6.99976C14.656 6.99976 16 8.34375 16 9.99975Z"
        stroke={fill}
        strokeWidth="1.5"
      />
    </svg>
  </WithLoader>
);
