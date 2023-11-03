import type { SocialProps } from './SocialProps';
import { WithLoader } from './WithLoader';

export const Facebook: React.FC<SocialProps> = ({ fill, loading }) => (
  <WithLoader loading={loading}>
    <svg
      data-testid="facebook-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4061 18.8908V12.6021H13.5033L13.902 9.99995H11.4061V8.31158C11.4061 7.60029 11.7542 6.90545 12.873 6.90545H14.0083V4.69057C14.0083 4.69057 12.9781 4.51465 11.9934 4.51465C9.93797 4.51465 8.59386 5.76004 8.59386 8.01669V9.99995H6.30811V12.6021H8.59386V18.8908C4.2912 18.2157 1 14.4922 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.4922 15.7088 18.2157 11.4061 18.8908Z"
        fill={fill}
      />
    </svg>
  </WithLoader>
);
