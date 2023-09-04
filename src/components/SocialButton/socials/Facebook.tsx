import { FC } from 'react';

import { SocialProps } from './SocialProps';
import { WithLoader } from './WithLoader';

export const Facebook: FC<SocialProps> = ({ fill, loading }) => (
  <WithLoader loading={loading}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M10.4061 17.8908V11.6021H12.5033L12.902 8.99995H10.4061V7.31158C10.4061 6.60029 10.7542 5.90545 11.873 5.90545H13.0083V3.69057C13.0083 3.69057 11.9781 3.51465 10.9934 3.51465C8.93797 3.51465 7.59386 4.76004 7.59386 7.01669V8.99995H5.30811V11.6021H7.59386V17.8908C3.2912 17.2157 0 13.4922 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.4922 14.7088 17.2157 10.4061 17.8908Z"
        fill={fill}
      />
    </svg>
  </WithLoader>
);
